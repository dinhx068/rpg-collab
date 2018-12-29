// var characters = require("./attributes.js");

$(document).ready(function () {

  $('.button').click(function () {
    let id = $(this).attr('id');
    switch (id) {
      case 'store-button':
        console.log(`=============================================`);
        console.log('store-button clicked');
        break;
      case 'inventory-button':
        console.log(`=============================================`);
        console.log('inventory-button clicked');
        console.log(characters.players);
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
      case 'combat-tips-button':
        console.log(`=============================================`);
        console.log('combat-tips-button clicked');
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
      window.location = "http://localhost:3000/unknown";
    },
    "Cancel" : function() {
      $(this).dialog("close");
    }
  }
}