'use strict';
var test = require('ava');
Number.isFinite = undefined;
var numIsFinite = require('./');

test(function (t) {
	t.assert(numIsFinite(0));
	t.assert(numIsFinite(100));
	t.assert(numIsFinite(-100));
	t.assert(numIsFinite(4e44));
	t.assert(!numIsFinite('0'));
	t.assert(!numIsFinite(NaN));
	t.assert(!numIsFinite(undefined));
	t.assert(!numIsFinite(Infinity));
	t.assert(!numIsFinite(-Infinity));
});
