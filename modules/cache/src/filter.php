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

interface Serializer extends Filter
{

}

interface Filter
{
	public function encode($data);
	public function decode($data);
}

class FilterUser
{
	private $numFilters;
	private $filters;

	public function __construct()
	{
		$this->numFilters = 0;
		$this->filters = array();
	}

	public final function addFilter($type, $args = array())
	{
		if (!class_exists('\\fluxbb\\cache\\filters\\'.$type))
		{
			if (!file_exists(PHPCACHE_ROOT.'filters/'.$type.'.php'))
			{
				throw new Exception('Filter "'.$type.'" does not exist.');
			}

			require PHPCACHE_ROOT.'filters/'.$type.'.php';
		}

		// Instantiate the filter
		$type = '\\fluxbb\\cache\\filters\\'.$type;
		$filter = new $type($args);

		$this->numFilters++;
		$this->filters[] = $filter;

		return $filter;
	}

	public function encode($data)
	{
		for ($i = 0; $i < $this->numFilters; $i++)
		{
			$data = $this->filters[$i]->encode($data);
		}

		return $data;
	}

	public function decode($data)
	{
		for ($i = $this->numFilters - 1; $i >= 0; $i--)
		{
			$data = $this->filters[$i]->decode($data);
		}

		return $data;
	}
}
