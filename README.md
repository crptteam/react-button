# Button

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Button component.

## Usage

```javascript

import { Button, SIZES, themes } from  "@crpt/react-button";


<Button onClick={e => console.log('clicked!')} size={SIZES.normal} />

```

| PropName | Описание | Пример |
|---|---|---|
| onClick: Function | Callback for click event. | &lt;Button onClick={e => console.log('clicked!')} /> |
| theme: Object | Theme object, can be found in themes directory. | &lt;Button theme={themes.filledTheme} /> |
| disabled: Boolean | Disables the button. | &lt;Button disabled /> |
| size: String | Button size, all sizes can be found SIZES. | &lt;Button size={SIZES.large} /> |
| link: Boolean | If true, the button becomes a link with href and target attributes. | &lt;Button link href="https://google.com/" target="_blank" /> |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
