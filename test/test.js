"use strict";
var test = require("blue-tape");
var cosmiconfig = require("cosmiconfig");
test('cosmiconfig exists', function (t) {
    t.plan(1);
    t.notEqual(cosmiconfig, undefined);
});
