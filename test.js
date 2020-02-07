const test = require('ava');
Number.isFinite = undefined;
const isFinite = require('.');

test('main', t => {
	t.true(isFinite(0));
	t.true(isFinite(100));
	t.true(isFinite(-100));
	t.true(isFinite(4e44));
	t.false(isFinite('0'));
	t.false(isFinite(NaN));
	t.false(isFinite(undefined));
	t.false(isFinite(Infinity));
	t.false(isFinite(-Infinity));
});
