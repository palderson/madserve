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
 * @subpackage	Tests
 * @copyright	Copyright (c) 2011 FluxBB (http://fluxbb.org)
 * @license		http://www.gnu.org/licenses/lgpl.html	GNU Lesser General Public License
 */

namespace fluxbb\cache\tests;

define('PHPCACHE_ROOT', realpath(dirname(__FILE__).'/../').'/src/');
require PHPCACHE_ROOT.'cache.php';

abstract class CacheTestCase extends \PHPUnit_Framework_TestCase
{
	/**
	 * The cache adapter used for testing.
	 * 
	 * This should better be set by concrete tests.
	 * 
	 * @var fluxbb\cache\Cache
	 */
	protected $cache;
	
	
	/**
	 * @dataProvider provider
	 */
	public function testGetSet($key, $value)
	{
		$this->cache->set($key, $value);

		$result = $this->cache->get($key);
		$this->assertEquals($result, $value);
	}
	
	public function testGetFalse()
	{
		$this->cache->set('testfalse', false);
		
		$result = $this->cache->get('testfalse');
		$this->assertNotEquals(\fluxbb\cache\Cache::NOT_FOUND, $result);
		$this->assertEquals(false, $result);
	}

	public function testDelete()
	{
		$key = 'test';

		$this->cache->set($key, time());
		$this->cache->delete($key);

		$result = $this->cache->get($key);
		$this->assertEquals($result, \fluxbb\cache\Cache::NOT_FOUND);
	}
	
	public function testStatistics()
	{
		$key = 'test';
		
		$this->assertEquals(0, $this->cache->inserts);
		$this->assertEquals(0, $this->cache->hits);
		$this->assertEquals(0, $this->cache->misses);
		
		// Trigger a miss
		$this->cache->get($key);
		$this->assertEquals(0, $this->cache->inserts);
		$this->assertEquals(0, $this->cache->hits);
		$this->assertEquals(1, $this->cache->misses);
		
		// Store data
		$this->cache->set($key, time());
		$this->assertEquals(1, $this->cache->inserts);
		$this->assertEquals(0, $this->cache->hits);
		$this->assertEquals(1, $this->cache->misses);
		
		// Trigger a hit
		$this->cache->get($key);
		$this->assertEquals(1, $this->cache->inserts);
		$this->assertEquals(1, $this->cache->hits);
		$this->assertEquals(1, $this->cache->misses);
		
		// Delete key
		$this->cache->delete($key);
		
		// Trigger another miss
		$this->cache->get($key);
		$this->assertEquals(1, $this->cache->inserts);
		$this->assertEquals(1, $this->cache->hits);
		$this->assertEquals(2, $this->cache->misses);
	}

	public function provider()
	{
		return array(
			array('int', time()),
			array('string', 'hello world'),
			array('bool', true),
			array('null', null),
			array('array', array(0 => 'zero', 1 => 'one', 7 => 'seven')),
			array('object', new \DOMComment('hello world')),
		);
	}
}
