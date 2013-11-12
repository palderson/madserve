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
 * The Memcached cache stores data using the Memcached extension for Memcached.
 * http://uk2.php.net/manual/en/book.memcached.php
 */

namespace fluxbb\cache\modules;

class Memcached extends \fluxbb\cache\Cache
{
	const DEFAULT_HOST = '127.0.0.1';
	const DEFAULT_PORT = 11211;

	private $memcached;

	/**
	* Initialise a new Memcached cache.
	*
	* @param	instance	An existing Memcached instance to reuse (if
	*						specified the other params are ignored)
	* @param	host		The memcached server host, defaults to localhost
	* @param	port		The memcached server port, defaults to 11211
	*/
	public function __construct($config)
	{
		if (!extension_loaded('memcached'))
		{
			throw new \fluxbb\cache\Exception('The Memcached cache requires the Memcached extension.');
		}

		// If we were given a Memcached instance use that
		if (isset($config['instance']))
		{
			$this->memcached = $config['instance'];
		}
		else
		{
			$host = isset($config['host']) ? $config['host'] : self::DEFAULT_HOST;
			$port = isset($config['port']) ? $config['port'] : self::DEFAULT_PORT;

			$this->memcached = new \Memcached();
			if (@$this->memcached->addServer($host, $port) === false)
			{
				throw new \fluxbb\cache\Exception('Unable to connect to memcached server: '.$host.':'.$port);
			}
		}
	}

	protected function _set($key, $data, $ttl)
	{
		// Memcached can take TTL as an expire time or number of seconds. If bigger than 30 days
		// Memcached assumes it to be an expire time. Since we always expect TTL in number of seconds
		// convert it correctly if needed to stop Memcached wrongly assuming its an expire time.
		if ($ttl > 2592000)
		{
			$ttl = time() + $ttl;
		}

		if ($this->memcached->set($key, $data, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write memcached cache: '.$key.'. Error code: '.$this->memcached->getResultCode());
		}
	}

	protected function _get($key)
	{
		$data = $this->memcached->get($key);
		if ($this->memcached->getResultCode() != 0)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		$this->memcached->delete($key);
	}

	public function clear()
	{
		$this->memcached->flush();
	}
}
