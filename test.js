import test from 'ava';
import intoStream from 'into-stream';
import getStream from 'get-stream';
import m from '.';

const fixture = 'foo\nbar';

test('pad', async t => {
	const ret = await getStream(intoStream(fixture).pipe(m(1)));
	t.is(ret, ' foo\n bar\n');
});

test('count 0', async t => {
	const ret = await getStream(intoStream(fixture).pipe(m(0)));
	t.is(ret, 'foo\nbar\n');
});

test('options', async t => {
	const ret = await getStream(intoStream(fixture).pipe(m(2, '@@')));
	t.is(ret, '@@@@foo\n@@@@bar\n');
});
