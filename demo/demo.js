(function() {
  'use strtic';
  document.getElementById('getHideText').addEventListener(
    'click',
    function(event) {
      var input = document.getElementById('getHideTextMethod');
      this.nextElementSibling.innerHTML = input.getHideText();
    }, false
  );

  var showHideValueMethod = document.getElementById('showValueMethod');
  document.getElementById('showValue').addEventListener(
    'click', showHideValueMethod.showValue.bind(showHideValueMethod), false
  );
  document.getElementById('hideValue').addEventListener(
    'click', showHideValueMethod.hideValue.bind(showHideValueMethod), false
  );
  document.getElementById('toggleVisibility').addEventListener(
    'click', showHideValueMethod.toggle.bind(showHideValueMethod), false
  );

  document.getElementById('getShowText').addEventListener(
    'click',
    function(event) {
      var input = document.getElementById('getShowTextMethod');
      this.nextElementSibling.innerHTML = input.getShowText();
    }, false
  );

  document.getElementById('toggleVisibility').addEventListener(
    'click',
    function(event) {
      document.getElementById('toggleMethod').toggle();
    }, false
  );

  var showedTimes = 0;
  document.getElementById('onShowEvent').addEventListener(
    'showValue',
    function() {
      document.getElementById('showedBadge').label = ++showedTimes;
    }, false);

  var hiddenTimes = 0;
  document.getElementById('onHideEvent').addEventListener(
    'hideValue',
    function() {
      document.getElementById('hiddenBadge').label = ++hiddenTimes;
    }, false);

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
