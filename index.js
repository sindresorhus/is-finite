'use strict';

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || val !== val || val === Infinity || val === -Infinity);
};
