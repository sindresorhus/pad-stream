import split from 'split2';
import through from 'through2';
import pumpify from 'pumpify';

export default function padStream(count, indent) {
	if (!Number.isSafeInteger(count)) {
		throw new TypeError(`Expected \`count\` to be a integer, got \`${count}\` (${typeof count})`);
	}

	indent = typeof indent === 'string' ? indent : ' ';

	return pumpify(split(), through((data, enc, callback) => {
		callback(null, indent.repeat(count) + data + '\n');
	}));
}
