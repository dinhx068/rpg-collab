const players = {
  "slayer": {
    "name": "Slayer",
    "hp": 100,
    "attack": 10,
    "speed": 3,
    "gold": 50,
    "img": "assets/images/playable_characters/slayer.png"
  },
  "dwarf": {
    "name": "Dwarf",
    "hp": 80,
    "attack": 5,
    "speed": 5,
    "gold": 300,
    "img": "assets/images/playable_characters/dwarf.png"
  },
  "priest": {
    "name": "Priest",
    "hp": 60,
    "attack": 15,
    "speed": 5,
    "gold": 50,
    "img":"assets/images/playable_characters/priest.png"
  },
  "elf": {
    "name": "Elf",
    "hp": 70,
    "attack": 15,
    "speed": 10,
    "gold": 50,
    "img": "assets/images/playable_characters/elf.png"
  },
  "priestess": {
    "name": "Priestess",
    "hp": 150,
    "attack": 5,
    "speed": 10,
    "gold": 50,
    "img": "assets/images/playable_characters/priestess.png"
  }
}

const enemies = {
  grunt: {   
    "name": "Grunt",
    "hp": 25,
    "attack": 8,
    "speed": 3,
    "img": "" 
  },
  tribe_leader: {   
    "name": "Tribe Leader",
    "hp": 50,
    "attack": 10,
    "speed": 5,
    "img": ""
  },
  general: {   
    "name": "General",
    "hp": 150,
    "attack": 15,
    "speed": 7,
    "img": "" 
  }
}

module.exports = {
  players: players,
  enemies: enemies
};
