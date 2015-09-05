(function() {
	/**
	 * input-password is an unstyled password field where user can show and hide the input value.
	 *
	 * Example:
	 *
	 *     <input-password visible toggleText="Show/Hide"></input-password>
	 *
	 * @element input-password
	 * @homepage http://jorgecasar.github.io/input-password/
	 * @demo
	 */
	Polymer({
		is: 'input-password',

		/**
		 * Fired when the value of is shown.
		 * @event showValue
		 */

		/**
		 * Fired when the value of is hidden.
		 * @event hideValue
		 */

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
				value: false
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

		observers: [
			'_visibleChanged(visible)'
		],

		listeners: {
			'visibilityButton.tap': 'toggle'
		},

		attached: function() {
			this.showText = this.getShowText();
			this.hideText = this.getHideText();
			this._visibleChanged();
		},

		/**
		 * Observer for visible property
		 */
		_visibleChanged: function() {
			this[this.visible ? 'showValue' : 'hideValue']();
		},

		/**
		 * Get the text of the button for show action
		 */
		getShowText: function() {
			return this.toggleText.split('/')[0];
		},

		/**
		 * Get the text of the button for hide action
		 */
		getHideText: function() {
			return this.toggleText.split('/')[1] || this.showText;
		},

		/**
		 * Action to show the input value
		 */
		showValue: function() {
			this.visible = true;
			this.$.input.type = 'text';
			this.classList.add(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.hideText;
			this.fire('showValue');
		},

		/**
		 * Action to hide the input value
		 */
		hideValue: function() {
			this.visible = false;
			this.$.input.type = 'password';
			this.classList.remove(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.showText;
			this.fire('hideValue');
		},

		/**
		 * Toggle the visibily of the input value
		 */
		toggle: function() {
			this.visible = !this.visible;
		}
	});
})();
