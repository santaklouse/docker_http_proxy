#!/usr/bin/env node

var child_process = require('child_process');
child_process.execSync("npm proxy:start",{stdio:[0,1,2]});
