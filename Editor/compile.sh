#!/bin/sh
workpath=$(cd `dirname $0`; pwd)/
cd ${workpath}
tsc @externals.txt --out externals.js -t ES5 --sourceMap