

[![npm][npm-svg]][npm-home] [![npm downloads](https://img.shields.io/npm/dm/teemsly.svg)](https://www.npmjs.com/package/teemsly)


Teemsly UI Component is react component libraries for enterprise system products, easy to use and customizable.

## Supported Platforms

### Browser

Teemsly Component supports the latest, stable releases of all major browsers and platforms. IE<=9 is no longer supported.

| IE   | Edge | Firefox | Chrome | Safari |
| ---- | ---- | ------- | ------ | ------ |
| >=11 | >=14 | >= 45   | >= 49  | >= 10  |


## Supported development environment

- Supports React 17 +
- Supports [TypeScript](http://www.typescriptlang.org/)

## Installation

Teemsly is available as an [npm package][npm-home].

```bash
npm i teemsly --save
```

or if you prefer Yarn

```bash
yarn add teemsly
```

## Usage

Here's a simple example

```js
import { Button } from 'teemsly';
import 'teemsly/dist/styles/teemsly-default.css';

ReactDOM.render(<Button>Button</Button>, mountNode);
```

### Documentation

Teemsly documentation is coming soon...

## Changelog

Detailed changes for each release are documented in the [release notes][release-note]

## Development


### UI-Driven Development

1. Fork `https://github.com/teemsly/teemsly` this repo.

```bash
$ git clone git@github.com:<YOUR NAME>/teemsly.git
```

2. Install it and run

```bash
$ npm i
$ gulp dev
$ gulp buildLess
$ npm run storybook
```

3. Your show time. Open url http://127.0.0.1:6006/ in browser.


## Supporting Teemsly

If you like Teemsly Component, you can show your support by contact us on email at [opensource@teemsly.com][email-us]


[email-us]: mailto:opensource@teemsly.com
[release-note]: https://github.com/teemsly/teemsly/releases
[npm-svg]: https://badge.fury.io/js/teemsly.svg
[npm-home]: https://www.npmjs.com/package/teemsly
