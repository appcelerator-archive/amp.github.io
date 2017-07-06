#!/bin/bash
set -e

npm install

./node_modules/.bin/grunt
cp CNAME build/CNAME

