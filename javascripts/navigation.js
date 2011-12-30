var heynowdance;

heynowdance = this.heynowdance || {};

heynowdance.navigateToView = function(selection) {  
  // Find the view to which we're switching. Do nothing if selection doesn't exist.
  var selectedView = heynowdance.views[selection];
  if (!selectedView) {
    window.location = window.location.href.replace( /#.*/, "");
    return;
  }
  
  // Bring the selection to the top behind the current view and then hide current
  selectedView.css({zIndex: 2});
  heynowdance.currentView.hide();
  
  // Hide the old view back with the others
  heynowdance.currentView.show();
  heynowdance.currentView.css({zIndex: 0});
  heynowdance.currentView = selectedView;
  
  // Set the hash so we can save a link right to this view
  if (selection != 0)
    document.location.hash = selection;
  else {// Almost made a whole site without catering to IE
    window.location = window.location.href.replace( /#.*/, "");
    return false;
  }
}