# Button

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Компонент кнопки.

## Usage

```javascript

import { Button, Constants } from  "@crpt/crpt-react-library";


<Button onClick={e => console.log('clicked!'} size={Constants.BUTTON_SIZES.normal} />

```

| PropName | Описание | Пример |
|---|---|---|
| onClick: Function | Callback для события click. | &lt;Button onClick={e => console.log('clicked!'} /> |
| theme: Object | Объект темы в правильном формате, который можно увидеть в themes. | &lt;Button theme={TYPOGRAPHY_THEMES.fill} /> |
| rightIcon: String | Код иконки справа. | &lt;Button rightIcon="calendar" /> |
| disabled: Boolean | Атрибут disabled, true выключает кнопку. | &lt;Button disabled /> |
| size: String | Размер кнопки, список всех размеров находится в Constants.BUTTON_SIZES. | &lt;Button size={Constants.BUTTON_SIZES.large} /> |
| link: Boolean | Превращает кнопку в ссылку, у которой есть атрибуты href и target. | &lt;Button link href="https://google.com/" target="_blank" /> |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
