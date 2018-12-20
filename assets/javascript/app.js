$(document).ready(function () {

  $('.button').click(function () {
    var id = $(this).attr('id');
    switch (id) {
      case 'explore-button':
        console.log('explore-button clicked');
        alertHello('waduhek!');
        break;
      case 'rest-button':
        console.log('rest-button clicked');
        // Add function, test the one I wrote below
        break;
      // Change the cases below
      // case 'rest-button':
      //     console.log('rest-button clicked');
      //     // Add function
      //     break;
      // case 'rest-button':
      //     console.log('rest-button clicked');
      //     // Add function
      //     break;
    }
  });

});

// Inspect the webpage with right click and go to the console tab to see the console.log()

// Alert function using string templating
function alertHello(a) {
  alert(`${a}`);
  console.log(`So yeah, no need for annoying + to concat strings but if you are using variables them use ${a}`);
}

// Console log function
function consoleLog() {
  console.log('A very ' + 'annoying way ' + 'to concat strings, ' + 'use the first function plox');
  console.log('What tis ' + 20 + ' ' + '+' + ' ' + 20 + '?');
  console.log('That is easy ' + 36 + '!');
}