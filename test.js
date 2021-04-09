import test from 'ava';
import intoStream from 'into-stream';
import getStream from 'get-stream';
import padStream from './index.js';

const fixture = 'foo\nbar';

test('pad', async t => {
	const string = await getStream(intoStream(fixture).pipe(padStream(1)));
	t.is(string, ' foo\n bar\n');
});

test('count 0', async t => {
	const string = await getStream(intoStream(fixture).pipe(padStream(0)));
	t.is(string, 'foo\nbar\n');
});

test('options', async t => {
	const string = await getStream(intoStream(fixture).pipe(padStream(2, '@@')));
	t.is(string, '@@@@foo\n@@@@bar\n');
});
