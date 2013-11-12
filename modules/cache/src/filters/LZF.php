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
 * The LZF filter compresses data using LZF.
 * http://uk2.php.net/manual/en/book.lzf.php
 */

namespace fluxbb\cache\filters;

class LZF implements \fluxbb\cache\Filter
{
	private $level;

	/**
	* Initialise a new LZF filter.
	*/
	public function __construct($config)
	{
		if (!extension_loaded('lzf'))
		{
			throw new \fluxbb\cache\Exception('The ZLF filter requires the ZLF extension.');
		}
	}

	public function encode($data)
	{
		return lzf_compress($data);
	}

	public function decode($data)
	{
		return lzf_decompress($data);
	}
}
