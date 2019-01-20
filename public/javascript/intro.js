// Initialize the characters based on the image chosen
function initializeCharacter(characterName) {
  this.player = players[characterName];
  window.location = "http://localhost:3000/inn";
}