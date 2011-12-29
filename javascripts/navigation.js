var heynowdance;

heynowdance = this.heynowdance || {};

heynowdance.navigateToView = function(view) {
  $("#" + view).css({zIndex: 2});
  heynowdance.currentView.hide();
  
  heynowdance.currentView.show();
  heynowdance.currentView.css({zIndex: 0});
  heynowdance.currentView = $("#" + view);
}