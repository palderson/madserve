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
 * The var_export filter serializes data into PHP code.
 * This filter can be loaded by default as not all cache layers
 * support storing PHP objects.
 */

namespace fluxbb\cache\filters;

class VarExport implements \fluxbb\cache\Serializer
{
	/**
	* Initialise a new VarExport filter.
	*/
	public function __construct($config)
	{

	}

	public function encode($data)
	{
		return 'return '.var_export($data, true).';';
	}

	public function decode($data)
	{
		return eval($data);
	}
}
