# fluxbb-cache ![Build status](https://secure.travis-ci.org/fluxbb/cache.png?branch=master)
fluxbb-cache is an API abstraction around various different cache stores available for PHP. Filters are supported to allow encoding of data during storage.
For cache stores that do not support data expiration (i.e. use of TTL) it is emulated.

## Documentation
[On our website](http://fluxbb.org/docs/v2.0/modules/cache)

## Supported cache stores
 * Flat files
 * [Alternative PHP Cache](http://uk2.php.net/manual/en/book.apc.php)
 * [Windows Cache](http://uk2.php.net/manual/en/book.wincache.php)
 * [XCache](http://xcache.lighttpd.net)
 * [Zend Cache Extension](http://files.zend.com/help/Zend-Platform/zend_cache_api.htm)
 * [eAccelerator](http://eaccelerator.net)
 * [Memcache](http://uk2.php.net/manual/en/book.memcache.php)
 * [Memcached](http://uk2.php.net/manual/en/book.memcached.php)
 * [Redis](https://github.com/nicolasff/phpredis)

## Serializers & Filters
fluxbb-cache also allows for adding serializers and filters to data, to further serialize, compress or encrypt data.

## License
[LGPL - GNU Lesser General Public License](http://www.gnu.org/licenses/lgpl.html)