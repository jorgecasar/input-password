(function() {
	var isReady = false;
	Polymer('input-password', {
		publish: {
			/**
			 * Placeholder text that hints to the user what can be entered in
			 * the input.
			 *
			 * @attribute placeholder
			 * @type string
			 * @default ''
			 */
			placeholder: '',
			/**
			 * If true, this input cannot be focused and the user cannot change
			 * its value.
			 *
			 * @attribute disabled
			 * @type boolean
			 * @default false
			 */
			disabled: false,

			/**
			 * If true, the user cannot modify the value of the input.
			 *
			 * @attribute readonly
			 * @type boolean
			 * @default false
			 */
			readonly: false,

			/**
			 * If true, the input is invalid until the value becomes non-null.
			 *
			 * @attribute required
			 * @type boolean
			 * @default false
			 */
			required: false,
			/**
			 * The value of the input.
			 *
			 * @attribute value
			 * @type string
			 * @default ''
			 */
			value: '',
			/**
			 * If true, the user can show the password.
			 *
			 * @attribute value
			 * @type boolean
			 * @default false
			 */
			visible: false,
			/**
			 * The button text to show and hide the input value.
			 *
			 * @attribute value
			 * @type string
			 * @default 'Toggle'
			 */
			toggleText: 'Toggle',
			/**
			 * The css class that will be included when the password is visible.
			 *
			 * @attribute value
			 * @type string
			 * @default 'visible'
			 */
			visibleClass: 'visible'
		},
		/* -- Lifecycle ------------------------------------------------- */
		ready: function() {
			// Initialize attributes
			this.showText = this.getShowText();
			this.hideText = this.getHideText();
			this.visibleChanged(null, this.visible);
			// Bind Events
			this._bindEvents();
		},
		domReady: function(){
			isReady = true;
		},
		visibleChanged: function(oldValue, newValue){
			this[newValue ? 'showValue' : 'hideValue']();
		},
		/* -- Methods --------------------------------------------------- */
		getShowText: function(){
			return this.toggleText.split('/')[0];
		},
		getHideText: function(){
			return this.toggleText.split('/')[1] || this.showText;
		},
		showValue: function() {
			this.visible = true;
			this.$.input.type = 'text';
			this.classList.add(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.hideText;
			if(isReady)
			{
				this.fire('showValue');
			}
		},
		hideValue: function() {
			this.visible = false;
			this.$.input.type = 'password';
			this.classList.remove(this.visibleClass);
			this.$.visibilityButton.innerHTML = this.showText;
			if(isReady)
			{
				this.fire('hideValue');
			}
		},
		toggle: function() {
			this.visible = !this.visible;
		},
		/* -- Events ---------------------------------------------------- */
		_bindEvents: function() {
			this.$.visibilityButton.addEventListener('tap', this.toggle.bind(this), false);
		}
	});
})();
InputPassword = function() {
	return document.createElement('input-password');
};
