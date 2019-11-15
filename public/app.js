(function() {
  var oldMileStonesHidden = true;
  var hiddenElements = document.querySelectorAll('.hidden');

  var setButtonLabel = function() {
    var element = document.querySelector('button span');
    if (oldMileStonesHidden) {
      element.textContent = 'Show Older Milestones';
    } else {
      element.textContent = 'Hide Old Milestones';
    }
  };

  setButtonLabel();

  document.querySelector('button').addEventListener('click', function() {
    [].forEach.call(hiddenElements, function(hiddenElement) {
      hiddenElement.classList.toggle('hidden');
    });
    oldMileStonesHidden = !oldMileStonesHidden;
    setButtonLabel();
  });
})();
