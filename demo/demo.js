(function() {
	'use strtic';

	// showText & hideText
	var showHideText = document.getElementById('showHideText');
	document.getElementById('getShowText').addEventListener(
		'click',
		function(event) {
			this.nextElementSibling.innerHTML = showHideText.showText;
		}, false
	);

	document.getElementById('getHideText').addEventListener(
		'click',
		function(event) {
			this.nextElementSibling.innerHTML = showHideText.hideText;
		}, false
	);

	// visible
	var showHideValue = document.getElementById('visibleInput');
	document.getElementById('showValue').addEventListener(
		'click', function(){
			visibleInput.visible = true;
		}, false
	);
	document.getElementById('hideValue').addEventListener(
		'click', function(){
			visibleInput.visible = false;
		}, false
	);

	// Toggle demo
	var toggleInput = document.getElementById('toggleInput');
	document.getElementById('toggleVisibility').addEventListener(
		'click',
		function(event) {
			toggleInput.toggle();
		}, false
	);

	/**********/
	/* Events */
	/**********/
	// ShowValue
	var visibilityEvents = document.getElementById('visibilityEvents');
	var showedTimes = document.getElementById('showedTimes');
	var hiddenTimes = document.getElementById('hiddenTimes');
	var nShowedTimes = 0;
	var nHiddenTimes = 0;
	showedTimes.innerHTML = nShowedTimes;
	hiddenTimes.innerHTML = nHiddenTimes;
	visibilityEvents.addEventListener(
		 'showValue', function(){
				showedTimes.innerHTML = ++nShowedTimes;
		 }, false
	);
	visibilityEvents.addEventListener(
		 'hideValue', function(){
				hiddenTimes.innerHTML = ++nHiddenTimes;
		 }, false
	);

	// DefaultEvents
	var inputEvents = [
		// Mouse events
		'mousedown', 'mouseup', 'click', 'mouseover', 'mouseout',
		// Keyboard events
		'keydown', 'keypress', 'keyup',
		// Touch events
		'touchstart', 'touchend', 'touchmove',
		// Focus events
		'focus', 'blur',
	];
	var inputPassword = document.getElementById('defaultEvents');
	for (var i = inputEvents.length - 1; i >= 0; i--) {
		inputPassword.addEventListener(inputEvents[i], function(event) {
			console.log(event.target.nodeName + ' received ' + event.type);
		}, false);
	}
})();
