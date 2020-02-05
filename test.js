const test = require("ava");
Number.isFinite = undefined;
const m = require("./");

test("isFinite tests", t => {
	t.true(m(0));
	t.true(m(100));
	t.true(m(-100));
	t.true(m(4e44));
	t.false(m("0"));
	t.false(m(NaN));
	t.false(m(undefined));
	t.false(m(Infinity));
	t.false(m(-Infinity));
});
