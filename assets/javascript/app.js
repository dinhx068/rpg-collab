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

// Actionbar calculations
// Uses a recursive timeout to slowly show the time progressing
// Once one of the characters hits 100, it will break out the loop and allow the player to choose what to do next.
var playerAB = 0;
var enemyAB = 0;
function actionBar() {
  if (playerAB < 100 && enemyAB < 100) {
    setTimeout(() => {
      playerAB += 5;
      enemyAB += 4;
      document.getElementById("playerABLog").innerHTML = `Player AB: ${playerAB}/100`;
      document.getElementById("enemyABLog").innerHTML = `Enemy AB: ${enemyAB}/100`;
      actionBar();
    }, 100);
  } else {
    if (playerAB >= 100) {
      playerAB = 0;
      document.getElementById("attackStatus").innerHTML = "Player attacked the enemy!";
    } else if (enemyAB >= 100) {
      enemyAB = 0;
      document.getElementById("attackStatus").innerHTML = "Enemy attacked the player!";
    } else {
      playerAB = 0;
      enemyAB = 0;
      document.getElementById("attackStatus").innerHTML = "The player and enemy attacked each other!";
    }
    document.getElementById("playerABLog").innerHTML = `Player AB: ${playerAB}/100`;
    document.getElementById("enemyABLog").innerHTML = `Enemy AB: ${enemyAB}/100`;
  }
}

// Console log function
function consoleLog() {
  console.log('A very ' + 'annoying way ' + 'to concat strings, ' + 'use the first function plox');
  console.log('What tis ' + 20 + ' ' + '+' + ' ' + 20 + '?');
  console.log('That is easy ' + 36 + '!');
}