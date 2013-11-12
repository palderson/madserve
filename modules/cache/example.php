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

header('Content-type: text/plain');

define('PHPCACHE_ROOT', dirname(__FILE__).'/src/');
require PHPCACHE_ROOT.'cache.php';

$cache = fluxbb\cache\Cache::load('File', array('dir' => '../../data/cache/', 'suffix' => '.php'), 'VarExport');

// Gzip all the cached data
//$cache->addFilter('GZip', array('level' => 9));

// Store the current time in the cache
//$cache->set('julian', 'zehetmayr', $ttl = 60);

// Retreive the stored time from the cache
$resultget = $cache->get('julian');
if ($resultget && $resultget!='Cache::NOT_FOUND'){
echo $resultget;
}
else {
echo "not found";	
}

// Clear the cache (just for this example, obviously you don't want to clear it normally!)
//$cache->clear();
