$(document).ready(function () {

  $('.button').click(function () {
    let id = $(this).attr('id');
    switch (id) {
      case 'search-button':
        console.log(`=============================================`);
        console.log('search-button clicked');
        switchButtons();
        break;
      case 'fight-button':
        console.log(`=============================================`);
        console.log('fight-button clicked');
        fighto();
        break;
      case 'items-button':
        console.log(`=============================================`);
        console.log('items-button clicked');
        console.log('does nothing atm');
        break;
      case 'help-button':
        console.log(`=============================================`);
        console.log('help-button clicked');
        console.log('does nothing atm');
        break;
      case 'escape-button':
        console.log(`=============================================`);
        console.log('escape-button clicked, testing AB start');
        ABStart();
        break;
      case 'go-back-button':
        console.log(`=============================================`);
        console.log('go-back-button clicked');
        $("#dialog-back").dialog(buttonOptionInn).dialog("open");
        break;
    }
  });
});

// To style the Dialog,
// https://stackoverflow.com/questions/1828010/apply-css-to-jquery-dialog-buttons
// For the button to head back to the inn
var buttonOptionInn = {
  autoOpen: false,
  modal: true,
  buttons : {
    "Confirm" : function() {
      top.location = "inn.html";
    },
    "Cancel" : function() {
      $(this).dialog("close");
    }
  }
}

// GLOBALS ========================================================================================
var PLAYER_AB = 0;
var ENEMY_AB = 0;
var IN_COMBAT = false;
// var LOCATION = string; // Maybe if we plan on making multiple areas

// Functionality ==================================================================================

// Function is called when the player clicks the search-button which, was to search for an enemy
// Changing the buttons once the player finds an enemy 
function switchButtons() {
  if (IN_COMBAT === false) {
    // Fight and Escape Buttons are available after the change
    $("#search-button").text("Fight");
    $("#search-button").attr("id", "fight-button");
    $("#go-back-button").text("Escape");
    $("#go-back-button").attr("id", "escape-button");
  } else {

  }
}

function fighto() {
  if (IN_COMBAT === false) {
    IN_COMBAT = true;
    ABStart();
    toggleDisabledButtons();
  } else {
    // Already in combat so no need to keep adding starting AB
    toggleDisabledButtons();
  }
}

function ABStart() {
  let playerABrand20 = Math.floor(Math.random() * 21); //returns a random integer from 0 to 20
  let monsterABrand20 = Math.floor(Math.random() * 21);
  let coinFlip = Math.floor(Math.random() * 2);
  console.log(`Testing purposes`);
  console.log(`Player ${playerABrand20}`);
  console.log(`Monster ${monsterABrand20}`);
  if (coinFlip === 0) {
    console.log("Player gets AB coin flip");
    // Starting AB for the player +5
    PLAYER_AB = playerABrand20 += 5;
    ENEMY_AB = monsterABrand20;
  } else {
    // Starting AB for the monster +5
    console.log("Monster gets AB coin flip");
    PLAYER_AB = playerABrand20;
    ENEMY_AB = monsterABrand20 += 5;
  }
  console.log(`Starting AB the Player gets ${PLAYER_AB}`);
  console.log(`Starting AB the Monster gets ${ENEMY_AB}`);
}

function toggleDisabledButtons() {
  if ($("#fight-button").prop("disabled") === false) {
    $("#fight-button").prop("disabled", true);
    $("#items-button").prop("disabled", true);
    $("#escape-button").prop("disabled", true);
    actionBar();
  } else {
    $("#fight-button").prop("disabled", false);
    $("#items-button").prop("disabled", false);
    $("#escape-button").prop("disabled", false);
  }
}

// Actionbar calculations
// Uses a recursive timeout to slowly show the time progressing
// Once one of the characters hits 100, it will break out the loop and allow the player to choose what to do next.
// When the enemy attacks, it doesn't stop the timer.
function actionBar() {
  // Our main loop to stay in combat
  if (PLAYER_AB < 100 && ENEMY_AB < 100) {
    setTimeout(() => {
      PLAYER_AB += 5;
      ENEMY_AB += 4;
      if (PLAYER_AB > 100) {
        PLAYER_AB = 100;
      }
      if (ENEMY_AB > 100) {
        ENEMY_AB = 100;
      }
      document.getElementById("playerABLog").innerHTML = `Player Action Bar: ${PLAYER_AB}/100`;
      document.getElementById("enemyABLog").innerHTML = `Enemy Action Bar: ${ENEMY_AB}/100`;
      actionBar();
    }, 100);
  } else if (PLAYER_AB >= 100 && ENEMY_AB >= 100) {
      /* When both players reach 100% AB */
      PLAYER_AB = 0;
      ENEMY_AB = 0;
      document.getElementById("attackStatus").innerHTML = "The player and enemy attacked each other!";
      document.getElementById("playerABLog").innerHTML = `Player Action Bar: ${PLAYER_AB}/100`;
      document.getElementById("enemyABLog").innerHTML = `Enemy Action Bar: ${ENEMY_AB}/100`;
      toggleDisabledButtons();
  } else if (PLAYER_AB >= 100) {
      /* When player reaches 100% AB */
      PLAYER_AB = 0;
      document.getElementById("attackStatus").innerHTML = "Player attacked the enemy!";
      document.getElementById("playerABLog").innerHTML = `Player Action Bar: ${PLAYER_AB}/100`;
      document.getElementById("enemyABLog").innerHTML = `Enemy Action Bar: ${ENEMY_AB}/100`;
      toggleDisabledButtons();
  } else {
      /* When opponent reaches 100% AB */
      ENEMY_AB = 0;
      document.getElementById("attackStatus").innerHTML = "Enemy attacked the player!";
      document.getElementById("playerABLog").innerHTML = `Player Action Bar: ${PLAYER_AB}/100`;
      document.getElementById("enemyABLog").innerHTML = `Enemy Action Bar: ${ENEMY_AB}/100`;
      setTimeout(() => {
        actionBar();
      }, 2000);
    }
}