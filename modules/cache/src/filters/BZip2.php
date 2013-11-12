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
* The BZip2 filter compresses data using BZip2. BZip2 can reach a higher
* compression ratio than GZip but is considerabily slower.
* http://uk2.php.net/manual/en/book.bzip2.php
*/

namespace fluxbb\cache\filters;

class BZip2 implements \fluxbb\cache\Filter
{
	const DEFAULT_LEVEL = 4;

	private $level;

	/**
	* Initialise a new BZip2 filter.
	*
	* @param	level	The compression level to use, ranging from 1-9. Defaults to 4
	*/
	public function __construct($config)
	{
		if (!extension_loaded('bz2'))
		{
			throw new \fluxbb\cache\Exception('The BZip2 filter requires the bz2 extension.');
		}

		$this->level = isset($config['level']) ? $config['level'] : self::DEFAULT_LEVEL;
	}

	public function encode($data)
	{
		return bzcompress($data, $this->level);
	}

	public function decode($data)
	{
		return bzdecompress($data);
	}
}
