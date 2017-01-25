'use strict';
const split = require('split2');
const through = require('through2');
const pumpify = require('pumpify');

module.exports = (count, indent) => {
	if (!Number.isSafeInteger(count)) {
		throw new TypeError(`Expected \`count\` to be a integer, got \`${count}\` (${typeof count})`);
	}

	indent = typeof indent === 'string' ? indent : ' ';

	return pumpify(split(), through((data, enc, cb) => {
		cb(null, indent.repeat(count) + data + '\n');
	}));
};
