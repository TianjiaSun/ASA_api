$(document).ready(function() {
  $("#dialog_container").hide();
  $( ".list_container" ).delegate( ".app_unit", "click", function() {
    $("#dialog_container").hide();
    $("#dialog_container").fadeIn(500);
  });
})
