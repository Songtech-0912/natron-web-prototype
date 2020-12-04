#!/bin/bash

# This is an experimental automatic script
# that does the hassle of production optimization
# for github pages integration super easy

# BEGIN COMMANDS

cp index.html docs
cp styles/styles.css docs/styles/oldstyle.css
docs/build.sh