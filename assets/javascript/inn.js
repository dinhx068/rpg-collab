$(document).ready(function () {

  $('.button').click(function () {
    let id = $(this).attr('id');
    switch (id) {
      case 'store-button':
        console.log(`=============================================`);
        console.log('store-button clicked');
        break;
      case 'explore-button':
        console.log(`=============================================`);
        console.log('explore-button clicked');
        $("#dialog-explore").dialog(buttonOptionExplore).dialog("open");
        break;
      case 'rest-button':
        console.log(`=============================================`);
        console.log('rest-button clicked');
        break;
      case 'chat-button':
        console.log(`=============================================`);
        console.log('chat-button clicked');
        break;
    }
  });
});

// For the button to head out and explore
var buttonOptionExplore = {
  autoOpen: false,
  modal: true,
  buttons : {
    "Confirm" : function() {
      top.location = "game.html";
    },
    "Cancel" : function() {
      $(this).dialog("close");
    }
  }
}