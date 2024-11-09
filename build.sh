#!/bin/bash

clang++ -std=c++17 -shared -fPIC -Iinclude -o libNumCpp.so include/NumCpp_wrap.cpp
cp libNumCpp.so libNumCpp.dylib