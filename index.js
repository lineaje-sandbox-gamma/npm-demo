const minimist = require('minimist');
const ip = require('ip');

const args = minimist(process.argv.slice(2));

console.log('Parsed args:', args);
console.log('Local IP address:', ip.address());
