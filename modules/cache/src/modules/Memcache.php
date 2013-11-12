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
 * The Memcache cache stores data using the Memcache extension for Memcached.
 * http://uk2.php.net/manual/en/book.memcache.php
 */

namespace fluxbb\cache\modules;

class Memcache extends \fluxbb\cache\Cache
{
	const DEFAULT_HOST = 'localhost';
	const DEFAULT_PORT = 11211;

	private $memcache;

	/**
	* Initialise a new Memcache cache.
	*
	* @param	instance	An existing Memcache instance to reuse (if
	*						specified the other params are ignored)
	* @param	host		The memcached server host, defaults to localhost
	* @param	port		The memcached server port, defaults to 11211
	*/
	public function __construct($config)
	{
		if (!extension_loaded('memcache'))
		{
			throw new \fluxbb\cache\Exception('The Memcache cache requires the Memcache extension.');
		}

		// If we were given a Memcache instance use that
		if (isset($config['instance']))
		{
			$this->memcache = $config['instance'];
		}
		else
		{
			$host = isset($config['host']) ? $config['host'] : self::DEFAULT_HOST;
			$port = isset($config['port']) ? $config['port'] : self::DEFAULT_PORT;

			$this->memcache = new \Memcache();
			if (@$this->memcache->connect($host, $port) === false)
			{
				throw new \fluxbb\cache\Exception('Unable to connect to memcached server: '.$host.':'.$port);
			}
		}
	}

	protected function _set($key, $data, $ttl)
	{
		// Memcache can take TTL as an expire time or number of seconds. If bigger than 30 days
		// Memcache assumes it to be an expire time. Since we always expect TTL in number of seconds
		// convert it correctly if needed to stop Memcache wrongly assuming its an expire time.
		if ($ttl > 2592000)
		{
			$ttl = time() + $ttl;
		}

		if ($this->memcache->set($key, $data, 0, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write memcache cache: '.$key);
		}
	}

	protected function _get($key)
	{
		$data = $this->memcache->get($key);
		if ($data === false)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		$this->memcache->delete($key);
	}

	public function clear()
	{
		$this->memcache->flush();
	}
}
