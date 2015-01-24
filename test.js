'use strict';
var test = require('ava');
var stringToStream = require('string-to-stream');
var concatStream = require('concat-stream');
var padStream = require('./');

test('pad', function (t) {
	t.plan(1);

	stringToStream('foo\nbar').pipe(padStream(' ')).pipe(concatStream(function (data) {
		t.assert(data.toString() === ' foo\n bar\n');
	}));
});

test('options', function (t) {
	t.plan(1);

	stringToStream('foo\nbar').pipe(padStream('@@', 2)).pipe(concatStream(function (data) {
		t.assert(data.toString() === '@@@@foo\n@@@@bar\n');
	}));
});
