import test = require('blue-tape');

import cosmiconfig = require('cosmiconfig');

test('cosmiconfig exists', (t) => {
  t.plan(1);
  t.notEqual(cosmiconfig, undefined);
});
