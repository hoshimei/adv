#!/bin/bash

if [ ! -e "package.json" ]; then
    echo "This script is meant to be run at rootdir"
    exit 1
fi
rm -rf dist
npm run build
cp README.md package.json dist/
