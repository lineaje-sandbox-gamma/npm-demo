const minimist = require('minimist');
const taffy = require('taffydb').taffy;

const args = minimist(process.argv.slice(2));

const db = taffy([
  { id: 1, name: 'sample' }
]);

console.log('Parsed args:', args);
console.log('TaffyDB record:', db().first());
