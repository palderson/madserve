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
 * The XML filter serializes data into XML string form.
 * This filter can be loaded by default as not all cache layers
 * support storing PHP objects.
 * http://pear.php.net/package/XML_Serializer/
 */

namespace fluxbb\cache\filters;

class XML implements \fluxbb\cache\Serializer
{
	private $serializer;
	private $unserializer;

	/**
	* Initialise a new XML filter.
	*/
	public function __construct($config)
	{
		@include_once 'XML/Serializer.php';
		@include_once 'XML/Unserializer.php';

		if (!class_exists('XML_Serializer') || !class_exists('XML_Unserializer'))
		{
			throw new \fluxbb\cache\Exception('The XML filter requires the Pear::XML_Serializer library.');
		}

		$this->serializer = new XML_Serializer(array(
			XML_SERIALIZER_OPTION_TYPEHINTS		=> true,
			XML_SERIALIZER_OPTION_RETURN_RESULT 	=> true,
		));

		$this->unserializer = new XML_Unserializer(array(
			XML_UNSERIALIZER_OPTION_RETURN_RESULT	=> true,
		));
	}

	public function encode($data)
	{
		return $this->serializer->serialize($data);
	}

	public function decode($data)
	{
		return $this->unserializer->unserialize($data, false);
	}
}
