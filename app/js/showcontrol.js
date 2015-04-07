$(document).ready(function() {
  $("#dialog_container").hide();
  $("#message_dialog").hide();
  $("#response_dialog").hide();

  $( ".list_container" ).delegate( ".app_unit", "click", function() {
    $("#dialog_container").hide();
    $("#dialog_container").fadeIn(500);
    $("#message_dialog").hide(); //clear previous message dialog from previous chatting
    $("#response_dialog").hide(); //clear previous message dialog from previous chatting
  });

  $("#bottom_send").click(function() {
    $("#message_dialog").hide();
    $("#message_dialog").fadeIn(200);
    $("#response_dialog").hide();
    $("#response_dialog").delay(200).fadeIn(200);
    $("#right_expend_button").show();
    $("#code_container").hide();    
    $("#copy_bn").hide();    
    $("#right_dialog_container").css("width", "auto");
    $("#right_dialog_container").css("height", "41px");
    $("#dialog_container").delay(600).animate({scrollTop:$(document).height()}, 1000);   
  });

  $(".list_container").click(function() {
    $("#dialog_container").delay(200).animate({scrollTop:$(document).height()}, 1000);    
  });

  $("#right_expend_button").click(function() {
      $("#right_dialog_container").animate({'width': '700px'}, 500);
      $("#right_dialog_container").delay(0).animate({'height': '400px'}, 500);
      $("#right_expend_button").hide();
      $("#code_container").show();    
      $("#copy_bn").show();
      $("#dialog_container").delay(600).animate({scrollTop:$(document).height()}, 1000);
  });

  $(document).keypress(function(e){
    if(e.keyCode==13 ){
      if($(".bottom_input_text").is(":focus")){
        $('#bottom_send').click();
      }
    }
  });

})