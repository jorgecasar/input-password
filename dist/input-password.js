(function() {
	Polymer('input-password', {
		/* -- Attributes ------------------------------------------------ */
		visible: false,
		toggleText: 'Toggle',
		visibleClass: 'visible',
		/* -- Lifecycle ------------------------------------------------- */
		ready: function() {
			// Bind Events
			this._bindEvents();
			// Initialize attributes
			this.showText = this.getShowText();
			this.hideText = this.getHideText();
			this.visible = this.visible === true || this.visible === 'visible' || this.visible;
			this.visibleChanged(this.show, this.show);
		},
		visibleChanged: function(oldValue, newValue){
			if( this.visible )
			{
				this.showValue();
			}
			else
			{
				this.hideValue();	
			}
		},
		nameChanged: function(oldValue, newValue){
		  	this.id = this.id || newValue;
		},
		/* -- Methods --------------------------------------------------- */
		getShowText: function(){
			return this.toggleText.split('/')[0];
		},
		getHideText: function(){
			return this.toggleText.split('/')[1] || this.showText;
		},
		showValue: function() {
			this.$[this.id].type = 'text';
			this.classList.add(this.visibleClass);
			this.$.visbilityButton.innerHTML = this.hideText;
			this.fire('showValue');
		},
		hideValue: function() {
			this.$[this.id].type = 'password';
			this.classList.remove(this.visibleClass);
			this.$.visbilityButton.innerHTML = this.showText;
			this.fire('hideValue');
		},
		toggle: function() {
	  		this.visible = !this.visible;
		},
		/* -- Events ---------------------------------------------------- */
		_bindEvents: function(){
			this.$.visbilityButton.addEventListener('tap', this.toggle.bind(this), false);
		}
	});
})();