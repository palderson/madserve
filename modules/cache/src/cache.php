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
 * @copyright	Copyright (c) 2011 FluxBB (http://fluxbb.org)
 * @license		http://www.gnu.org/licenses/lgpl.html	GNU Lesser General Public License
 */

namespace fluxbb\cache;

if (!defined('PHPCACHE_ROOT'))
	define('PHPCACHE_ROOT', dirname(__FILE__).'/');

require PHPCACHE_ROOT.'filter.php';

abstract class Cache extends FilterUser
{
	const NOT_FOUND = 'Cache::NOT_FOUND';
	const DEFAULT_SERIALIZER = 'Serialize';

	public static final function load($type, $args = array(), $serializerType = false, $serializerArgs = array())
	{
		if (!class_exists('\\fluxbb\\cache\\modules\\'.$type))
		{
			if (!file_exists(PHPCACHE_ROOT.'modules/'.$type.'.php'))
			{
				throw new Exception('Cache type "'.$type.'" does not exist.');
			}

			require PHPCACHE_ROOT.'modules/'.$type.'.php';
		}

		if ($serializerType === false)
		{
			$serializerType = self::DEFAULT_SERIALIZER;
			$serializerArgs = array();
		}

		// Instantiate the cache
		$type = '\\fluxbb\\cache\\modules\\'.$type;
		$cache = new $type($args);

		// If we have a prefix defined, set it
		if (isset($args['prefix']))
		{
			$cache->prefix = $args['prefix'];
		}

		// Add a serialize filter by default as not all caches can handle storing PHP objects
		$cache->addFilter($serializerType, $serializerArgs);

		return $cache;
	}

	public $inserts = 0;
	public $hits = 0;
	public $misses = 0;
	protected $prefix = '';

	public function set($key, $data, $ttl = 0)
	{
		$data = $this->encode($data);
		$this->_set($this->prefix.$key, $data, $ttl);
		$this->inserts++;
	}

	protected abstract function _set($key, $data, $ttl);

	public function get($key)
	{
		$data = $this->_get($this->prefix.$key);
		if ($data === self::NOT_FOUND)
		{
			$this->misses++;
			return self::NOT_FOUND;
		}

		$data = $this->decode($data);

		$this->hits++;
		return $data;
	}

	protected abstract function _get($key);

	public function delete($key)
	{
		$this->_delete($this->prefix.$key);
	}

	protected abstract function _delete($key);

	public abstract function clear();
}

class Exception extends \Exception {
	
	public function __construct($msg)
	{
		parent::__construct($msg);
	}
}
