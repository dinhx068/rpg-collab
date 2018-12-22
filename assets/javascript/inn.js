$(document).ready(function () {

  $('.button').click(function () {
    let id = $(this).attr('id');
    switch (id) {
      case 'explore-button':
        console.log('explore-button clicked');
        break;
      case 'rest-button':
        console.log('rest-button clicked');
        break;
      case 'store-button':
        console.log('store-button clicked');
        break;
      case 'chat-button':
        console.log('chat-button clicked');
        break;
    }
  });
});