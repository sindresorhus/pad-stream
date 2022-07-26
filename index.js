import split from 'split2';
import transformStream from 'easy-transform-stream';
import pumpify from 'pumpify';

export default function padStream(count, indent) {
	if (!Number.isSafeInteger(count)) {
		throw new TypeError(`Expected \`count\` to be a integer, got \`${count}\` (${typeof count})`);
	}

	indent = typeof indent === 'string' ? indent : ' ';

	return pumpify(
		split(),
		transformStream(chunk => indent.repeat(count) + chunk + '\n'),
	);
}
