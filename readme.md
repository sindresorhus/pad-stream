# pad-stream [![Build Status](https://travis-ci.org/sindresorhus/pad-stream.svg?branch=master)](https://travis-ci.org/sindresorhus/pad-stream)

> Pad each line in a stream


## Install

```
$ npm install --save pad-stream
```


## Usage

```js
// pad.js
const padStream = require('pad-stream');

process.stdin.pipe(padStream(2, '>')).pipe(process.stdout);
```

```
$ echo 'foo\nbar' | node pad.js
>>foo
>>bar
```


## API

### padStream(count, [indent])

Returns a [transform stream](https://nodejs.org/api/stream.html#stream_duplex_and_transform_streams).

#### count

Type: `number` *(integer)*

Number of times to repeat `indent`.

#### indent

Type: `string`<br>
Default: `' '`

String to use as indent.


## Related

- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string
- [indent-string-cli](https://github.com/sindresorhus/indent-string-cli) - Indent each line in some text or stdin


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
