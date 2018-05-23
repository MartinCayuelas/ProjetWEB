#!/bin/bash

cd client
ng build
cd ../server
node server.js

