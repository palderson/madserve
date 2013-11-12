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
 * The Redis cache stores data using Redis via the phpredis extension.
 * http://github.com/owlient/phpredis
 */

namespace fluxbb\cache\modules;

class Redis extends \fluxbb\cache\Cache
{
	const DEFAULT_HOST = 'localhost';
	const DEFAULT_PORT = 6379;

	private $redis;

	/**
	* Initialise a new Redis cache.
	*
	* @param	instance	An existing Redis instance to reuse (if
	*						specified the other params are ignored)
	* @param	host		The redis server host, defaults to localhost
	* @param	port		The redis server port, defaults to 6379
	* @param	password	The redis server password, if required
	*/
	public function __construct($config)
	{
		if (!extension_loaded('redis'))
		{
			throw new \fluxbb\cache\Exception('The Redis cache requires the Redis extension.');
		}

		// If we were given a Redis instance use that
		if (isset($config['instance']))
		{
			$this->redis = $config['instance'];
		}
		else
		{
			$host = isset($config['host']) ? $config['host'] : self::DEFAULT_HOST;
			$port = isset($config['port']) ? $config['port'] : self::DEFAULT_PORT;

			$this->redis = new \Redis();
			if (@$this->redis->connect($host, $port) === false)
			{
				throw new \fluxbb\cache\Exception('Unable to connect to redis server: '.$host.':'.$port);
			}

			if (isset($config['password']))
			{
				$this->redis->auth($config['password']);
			}
		}
	}

	protected function _set($key, $data, $ttl)
	{
		if ($this->redis->set($key, $data) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write redis cache: '.$key);
		}

		if ($ttl > 0 && $this->redis->expire($key, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to set TTL on cache: '.$key);
		}
	}

	protected function _get($key)
	{
		$data = $this->redis->get($key);
		if ($data === false)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		$this->redis->delete($key);
	}

	public function clear()
	{
		$this->redis->flushDB();
	}
}
