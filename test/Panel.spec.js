var test = require('tape');
var global = require('../../../lib/global');

test('Exports window', function(t) {
    t.equal(global, window);
    t.end();
});
