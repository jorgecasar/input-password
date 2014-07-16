# &lt;github-ribbon&gt;

Web Component wrapper for [Github Ribbons](https://github.com/blog/273-github-ribbons) using [Polymer](http://www.polymer-project.org/polymer.html).

## Demo

> [Check it live](http://nbluis.github.io/github-ribbon-element/index.html).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130816/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/github-ribbon.html">
	```

3. Start using it!

	```xml
	<github-ribbon owner="nbluis" repo="github-ribbon-element"></github-ribbon>
	```

## Options

Attribute | Options  		  | Default                    | Description
---       | ---      		  | ---                        | ---
`owner`   | *string* 		  | none                       | Owner of the project (User or Organization)
`repo`    | *string*          | none   				       | The repo name
`corner`  | `left`, `right`   | `right`                    | The corner which ribbon will appears
`color`   | `green`, `red`, `gray`, `white`, `darkblue`, `orange` 		  | `green`                | The ribbon color

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)