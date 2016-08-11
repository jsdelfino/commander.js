/**
 * Module dependencies.
 */

var program = require('../')
  , should = require('should');

program
  .version('0.0.1')
  .option('-c, --cheese [type] ...', 'optionally specify the type of cheese')
  .option('-j, --jam [type]', 'optionally specify the type of strawberry');

program.parse(['node', 'test', '--cheese', 'feta', 'cheese', '--jam', 'strawberry']);
program.cheese.should.equal('feta cheese');
program.jam.should.equal('strawberry');
