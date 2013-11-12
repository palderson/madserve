<?php
/**
 * FluxBB
 *
 * LICENSE
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA.
 *
 * @category	FluxBB
 * @package		Cache
 * @subpackage	Filters
 * @copyright	Copyright (c) 2011 FluxBB (http://fluxbb.org)
 * @license		http://www.gnu.org/licenses/lgpl.html	GNU Lesser General Public License
 */

/**
 * The MCrypt filter encrypts data using the given cipher and secret key.
 * http://uk2.php.net/manual/en/book.mcrypt.php
 */

namespace fluxbb\cache\filters;

class MCrypt implements \fluxbb\cache\Filter
{
	const DEFAULT_CIPHER = MCRYPT_RIJNDAEL_128;
	const DEFAULT_MODE = MCRYPT_MODE_ECB;

	private $key;
	private $cipher;
	private $mode;
	private $iv;

	/**
	* Initialise a new MCrypt filter.
	*
	* @param	secret	The secret key to encrypt/decrypt data with
	* @param	cipher	The cipher to use, defaults to MCRYPT_RIJNDAEL_128
	* @param	mode	The block cipher mode to use, defaults to MCRYPT_MODE_ECB
	*/
	public function __construct($config)
	{
		if (!extension_loaded('mcrypt'))
		{
			throw new \fluxbb\cache\Exception('The MCrypt filter requires the MCrypt extension.');
		}

		if (!isset($config['secret']))
		{
			throw new \fluxbb\cache\Exception('A secret is required to encrypt data.');
		}

		$this->key = md5($config['secret']);
		$this->cipher = isset($config['cipher']) ? $config['cipher'] : self::DEFAULT_CIPHER;
		$this->mode = isset($config['mode']) ? $config['mode'] : self::DEFAULT_MODE;

		$this->iv = mcrypt_create_iv(mcrypt_get_iv_size($this->cipher, $this->mode), MCRYPT_RAND);
	}

	public function encode($data)
	{
		$data = mcrypt_encrypt($this->cipher, $this->key, $data, $this->mode, $this->iv);
		return base64_encode($data);
	}

	public function decode($data)
	{
		$data = base64_decode($data);
		return mcrypt_decrypt($this->cipher, $this->key, $data, $this->mode, $this->iv);
	}
}
