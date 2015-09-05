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

		behaviors: [
			Polymer.IronFormElementBehavior,
			Polymer.PaperInputBehavior,
			Polymer.IronControlState
		],

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
			'_visibleChanged(visible)',
			'_toggleTextChanged(toggleText)'
		],

		listeners: {
			'visibilityButton.tap': 'toggle'
		},

		attached: function() {
			this._toggleTextChanged();
			this._visibleChanged();
		},

		/**
		 * Observer for visible property
		 */
		_visibleChanged: function() {
			this[this.visible ? '_showValue' : '_hideValue']();
		},

		/**
		 * Observer for toggle-text property
		 */
		_toggleTextChanged: function() {
			this._showText = this.showText;
			this._hideText = this.hideText;
		},

		/**
		 * Get the text of the button for show action
		 */
		get showText() {
			return this.toggleText.split('/')[0];
		},

		/**
		 * Get the text of the button for hide action
		 */
		get hideText() {
			return this.toggleText.split('/')[1] || this._showText;
		},

		/**
		 * Action to show the input value
		 */
		_showValue: function() {
			if( this.visible ) { this.visible = true; }
			this.visible = true;
			this.$.input.type = 'text';
			if(this.visibleClass) {
				this.toggleClass(this.visibleClass, this.visible);
			}
			this.$.visibilityButton.innerHTML = this._hideText;
			this.fire('showValue');
		},

		/**
		 * Action to hide the input value
		 */
		_hideValue: function() {
			if( this.visible ) { this.visible = false; }
			this.$.input.type = 'password';
			if(this.visibleClass) {
				this.toggleClass(this.visibleClass, this.visible);
			}
			this.$.visibilityButton.innerHTML = this._showText;
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
