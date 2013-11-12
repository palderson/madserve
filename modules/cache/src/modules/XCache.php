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
 * The XCache cache stores data using XCache.
 * http://xcache.lighttpd.net
 */

namespace fluxbb\cache\modules;

class XCache extends \fluxbb\cache\Cache
{
	/**
	* Initialise a new XCache cache.
	*/
	public function __construct($config)
	{
		if (!extension_loaded('xcache'))
		{
			throw new \fluxbb\cache\Exception('The XCache cache requires the XCache extension.');
		}
	}

	protected function _set($key, $data, $ttl)
	{
		if (xcache_set($key, $data, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write xcache cache: '.$key);
		}
	}

	protected function _get($key)
	{
		$data = xcache_get($key);
		if ($data === null)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		xcache_unset($key);
	}

	public function clear()
	{
		// Note: xcache_clear_cache() is an admin function! If you have
		// xcache.admin.enable_auth = On in php.ini this will require HTTP auth!
		xcache_clear_cache(XC_TYPE_VAR, 0);
	}
}
