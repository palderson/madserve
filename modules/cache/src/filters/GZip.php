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
 * The GZip filter compresses data using GZip.
 * http://uk2.php.net/manual/en/book.zlib.php
 */

namespace fluxbb\cache\filters;

class GZip implements \fluxbb\cache\Filter
{
	const DEFAULT_LEVEL = 4;

	private $level;

	/**
	* Initialise a new GZip filter.
	*
	* @param	level	The compression level to use, ranging from 0-9. Defaults to 4
	*/
	public function __construct($config)
	{
		if (!extension_loaded('zlib'))
		{
			throw new \fluxbb\cache\Exception('The GZip filter requires the Zlib extension.');
		}

		$this->level = isset($config['level']) ? $config['level'] : self::DEFAULT_LEVEL;
	}

	public function encode($data)
	{
		return gzdeflate($data, $this->level);
	}

	public function decode($data)
	{
		return gzinflate($data);
	}
}
