(function() {
	var isReady = false;
	return Polymer({
		is: 'input-password',
		properties: {
			/**
			 * Placeholder text that hints to the user
			 * what can be entered in the input.
			 *
			 * @attribute placeholder
			 * @type string
			 * @default ''
			 */
			placeholder: {
				type: String,
				value: ''
			},
			/**
			 * If true, this input cannot be focused
			 * and the user cannot change its value.
			 *
			 * @attribute disabled
			 * @type boolean
			 * @default false
			 */
			disabled: {
				type: Boolean,
				value: false
			},

			/**
			 * If true, the user cannot modify
			 * the value of the input.
			 *
			 * @attribute readonly
			 * @type boolean
			 * @default false
			 */
			readonly: {
				type: Boolean,
				value: false
			},

			/**
			 * If true, the input is invalid until
			 * the value becomes non-null.
			 *
			 * @attribute required
			 * @type boolean
			 * @default false
			 */
			required: {
				type: Boolean,
				value: false
			},
			/**
			 * The value of the input.
			 *
			 * @attribute value
			 * @type string
			 * @default ''
			 */
			value: {
				type: String,
				value: ''
			},
			/**
			 * If true, the user can show the password.
			 *
			 * @attribute value
			 * @type boolean
			 * @default false
			 */
			visible: {
				type: Boolean,
				value: false,
				observer: '_visibleChanged'
			},
			/**
			 * The button text to show and hide the input value.
			 *
			 * @attribute value
			 * @type string
			 * @default 'Toggle'
			 */
			toggleText: {
				type: String,
				value: 'Toggle'
			},
			/**
			 * This css class will be included
			 * when the password is visible.
			 *
			 * @attribute value
			 * @type string
			 * @default 'visible'
			 */
			visibleClass: {
				type: String,
				value: 'visible'
			}
		},
		listeners: {
			'visibilityButton.tap': 'toggle'
		},

		/* -- Lifecycle ------------------------------------------------- */
		attached: function() {
			// Initialize attributes
			this.showText = this.getShowText();
			this.hideText = this.getHideText();
			this.$.visibilityButton.innerHTML =
				this.visible?
				this.showText:
				this.hideText;
		},
		/* -- Observers ------------------------------------------------- */
		_visibleChanged: function(){
			this[this.visible ? 'showValue' : 'hideValue']();
		},
		/* -- Methods --------------------------------------------------- */
		getShowText: function(){
			return this.toggleText.split('/')[0];
		},
		getHideText: function(){
			return this.toggleText.split('/')[1] || this.showText;
		},
		showValue: function() {
			this.$.input.type = 'text';
			this.classList.add(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.hideText;
		},
		hideValue: function() {
			this.$.input.type = 'password';
			this.classList.remove(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.showText;
		},
		/* -- Listeners ------------------------------------------------- */
		toggle: function() {
			this.visible = !this.visible;
		}
	});
})();