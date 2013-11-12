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
 * @subpackage	Modules
 * @copyright	Copyright (c) 2011 FluxBB (http://fluxbb.org)
 * @license		http://www.gnu.org/licenses/lgpl.html	GNU Lesser General Public License
 */

/**
 * The APC cache stores data using APC.
 * http://uk2.php.net/manual/en/book.apc.php
 */

namespace fluxbb\cache\modules;

class APC extends \fluxbb\cache\Cache
{
	/**
	* Initialise a new APC cache.
	*/
	public function __construct($config)
	{
		if (!extension_loaded('apc'))
		{
			throw new \fluxbb\cache\Exception('The APC cache requires the APC extension.');
		}
	}

	// Since we are emulating the TTL we need to override set()
	public function set($key, $data, $ttl = 0)
	{
		// APC does support TTL however not within a single session so lets emulate it
		$data = array('expire' => $ttl > 0 ? time() + $ttl : 0, 'data' => $data);

		parent::set($key, $data, $ttl);
	}

	protected function _set($key, $data, $ttl)
	{
		if (apc_store($key, $data, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write APC cache: '.$key);
		}
	}

	// Since we are emulating the TTL we need to override get()
	public function get($key)
	{
		$data = parent::get($key);
		if ($data === self::NOT_FOUND)
		{
			return self::NOT_FOUND;
		}

		// Check if the data has expired
		if ($data['expire'] > 0 && $data['expire'] < time())
		{
			$this->delete($key);

			// Correct the hit/miss counts
			$this->hits--;
			$this->misses++;

			return self::NOT_FOUND;
		}

		return $data['data'];
	}

	protected function _get($key)
	{
		$data = apc_fetch($key);
		if ($data === false)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		apc_delete($key);
	}

	public function clear()
	{
		apc_clear_cache('user');
	}
}
