#! /bin/sh

# Install Memcache
wget http://pecl.php.net/get/memcache-2.2.6.tgz
tar -xzf memcache-2.2.6.tgz
sh -c "cd memcache-2.2.6 && phpize && ./configure --enable-memcache && make && sudo make install"
echo "extension=memcache.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`

# Install Memcached
wget http://pecl.php.net/get/memcached-1.0.2.tgz
tar -xzf memcached-1.0.2.tgz
sh -c "cd memcached-1.0.2 && phpize && ./configure && make && sudo make install"
echo "extension=memcached.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`

# Install APC
wget http://pecl.php.net/get/APC-3.1.9.tgz
tar -xzf APC-3.1.9.tgz
sh -c "cd APC-3.1.9 && phpize && ./configure && make && sudo make install"
echo "extension=apc.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`
echo "apc.enabled=1" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`
echo "apc.enable_cli=1" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`

# Install Redis bindings
wget https://github.com/nicolasff/phpredis/tarball/2.1.3 -O phpredis.tgz
tar -xzf phpredis.tgz
sh -c "cd nicolasff-phpredis-43bc590 && phpize && ./configure && make && sudo make install"
echo "extension=redis.so" >> `php --ini | grep "Loaded Configuration" | sed -e "s|.*:\s*||"`
