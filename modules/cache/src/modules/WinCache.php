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
 * The Wincache cache stores data using the Windows Cache extension.
 * http://uk2.php.net/manual/en/book.wincache.php
 */

namespace fluxbb\cache\modules;

class WinCache extends \fluxbb\cache\Cache
{
	/**
	* Initialise a new WinCache cache.
	*/
	public function __construct($config)
	{
		if (!extension_loaded('wincache'))
		{
			throw new \fluxbb\cache\Exception('The WinCache cache requires the WinCache extension.');
		}
	}

	protected function _set($key, $data, $ttl)
	{
		if (wincache_ucache_set($key, $data, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write wincache cache: '.$key);
		}
	}

	protected function _get($key)
	{
		$success = false;

		$data = wincache_ucache_get($key, $success);
		if ($success === false)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		wincache_ucache_delete($key);
	}

	public function clear()
	{
		wincache_ucache_clear();
	}
}
