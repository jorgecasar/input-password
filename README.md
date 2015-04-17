[![Package Quality](http://npm.packagequality.com/badge/input-password.png)](http://packagequality.com/#?package=input-password)
[![Build Status](https://secure.travis-ci.org/jorgecasar/karmacracy-javascript-api.svg?branch=master)](http://travis-ci.org/jorgecasar/karmacracy-javascript-api)
[![Dependency Status](https://david-dm.org/jorgecasar/karmacracy-javascript-api.svg?theme=shields.io)](https://david-dm.org/jorgecasar/karmacracy-javascript-api)
[![devDependency Status](https://david-dm.org/jorgecasar/karmacracy-javascript-api/dev-status.svg?theme=shields.io)](https://david-dm.org/jorgecasar/karmacracy-javascript-api#info=devDependencies)

# &lt;input-password&gt;

The input password with mobile features and possibility to see the password and more.

## Demo

[http://jorgecasar.github.io/input-password/](http://jorgecasar.github.io/input-password/)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install input-password --save
```

Or [download as ZIP](https://github.com/jorgecasar/input-password/archive/gh-pages.zip).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="bower_components/platform/platform.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="bower_components/input-password/dist/input-password.html">
	```

3. Start using it!

	```html
	<input-password></input-password>
	```

### Options

Attribute     | Options    | Default   | Description
---           | ---        | ---       | ---
`name`        | *string*   | ``        | Specifies the input's name.
`value`       | *string*   | ``        | Specifies the input's value.
`visible`     | *boolean*  | `false`   | Specifies the visibility of the input's value.
`toggleText`  | *string*   | `Toggle`  | Specifies the text for the button that change the visibility.
`toggleClass` | *string*   | `visible` | Specifies the class that will have to be synthesized and spoken.

### Methods

Method          | Parameters     | Returns            | Description
---             | ---            | ---                | ---
`getShowText()` | None.          | Nothing.           | Get the button's show text.
`getHideText()` | None.          | Nothing.           | Get the button's hide text.
`showValue()`   | None.          | Nothing.           | Triggers the input value to be shown.
`hideValue()`   | None.          | Nothing.           | Triggers the input value to be hidden.
`toggle()`      | None.          | Nothing.           | Triggers the input value to be toggled.

### Events

Event         | Description
---           | ---
`onShowValue` | Triggers when the password is shown.
`onHideValue` | Triggers when the password is hidden.
