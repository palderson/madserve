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
 * The File cache stores data using regular files.
 */

namespace fluxbb\cache\modules;

class File extends \fluxbb\cache\Cache
{
	const DEFAULT_SUFFIX = '.cache';

	private $dir;
	private $suffix;

	/**
	* Initialise a new File cache.
	*
	* @param	dir	The directory in which to store cache files. Must be
	*				writable by PHP and will be created if required.
	*/
	public function __construct($config)
	{
		$this->dir = $config['dir'];
		if ((!is_dir($this->dir) && !@mkdir($this->dir, 0777, true)) || !is_writable($this->dir))
		{
			throw new \fluxbb\cache\Exception('Unable to write to cache dir: '.$this->dir);
		}

		$this->suffix = isset($config['suffix']) ? $config['suffix'] : self::DEFAULT_SUFFIX;
	}

	private function key($key)
	{
		return sha1($key);
	}

	// Since we are emulating the TTL we need to override set()
	public function set($key, $data, $ttl = 0)
	{
		// Since files don't support TTL we need to emulate it
		$data = array('expire' => $ttl > 0 ? time() + $ttl : 0, 'data' => $data);

		parent::set($key, $data, $ttl);
	}

	protected function _set($key, $data, $ttl)
	{
		if (@file_put_contents($this->dir.$this->key($key).$this->suffix, $data) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write file cache: '.$key);
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
		$data = @file_get_contents($this->dir.$this->key($key).$this->suffix);
		if ($data === false)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		@unlink($this->dir.$this->key($key).$this->suffix);

		// Incase we are using APC with apc.stat=0
		if (function_exists('apc_delete_file'))
		{
			@apc_delete_file($this->dir.$this->key($key).$this->suffix);
		}
	}

	public function clear()
	{
		$files = glob($this->dir.'*'.$this->suffix);
		foreach ($files as $file)
		{
			@unlink($file);
		}
	}
}
