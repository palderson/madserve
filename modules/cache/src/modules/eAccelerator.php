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
 * The eAccelerator cache stores data using eAccelerator.
 * http://eaccelerator.net
 */

namespace fluxbb\cache\modules;

class eAccelerator extends \fluxbb\cache\Cache
{
	/**
	* Initialise a new eAccelerator cache.
	*/
	public function __construct($config)
	{
		if (!extension_loaded('eaccelerator') || !function_exists('eaccelerator_put')) // For some reason the user cache functions aren't available in 0.9.6.x...
		{
			throw new \fluxbb\cache\Exception('The eAccelerator cache requires the eAccelerator extension with shared memory functions enabled.');
		}
	}

	protected function _set($key, $data, $ttl)
	{
		if (eaccelerator_put($key, $data, $ttl) === false)
		{
			throw new \fluxbb\cache\Exception('Unable to write eAccelerator cache: '.$key);
		}
	}

	protected function _get($key)
	{
		$data = eaccelerator_get($key);
		if ($data === null)
		{
			return self::NOT_FOUND;
		}

		return $data;
	}

	protected function _delete($key)
	{
		eaccelerator_rm($key);
	}

	public function clear()
	{
		eaccelerator_clear();
	}
}
