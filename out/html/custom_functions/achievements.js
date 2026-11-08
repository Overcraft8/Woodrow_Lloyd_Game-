window.achievements_list = {
  "achievements": [
    {
      "id": "game-completed",
      "name": "Finished the Game",
      "description": "Finish the game! Woohoo!",
      "difficulty": 0,
      "image": "img/misc_graphics/Wheat_Bundle.png"
    },
    {
      "id": "woodrow-win",
      "name": "The Lloyd Years",
      "description": "Woodrow Lloyd is reelected as Premier of Saskatchewan",
      "difficulty": 2,
      "image": "img/portraits/LloydWoodrow.jpg"
    },
    {
      "id": "thatcher-win",
      "name": "That",
      "description": "Thatcher wins the 1964 Saskatchewan General Election",
      "difficulty": 2,
      "image": "img/portraits/ThatcherRoss.jpg"
    },
    {
      "id": "medicare-martyr",
      "name": "Martyr of Medicare",
      "description": "Fully implement Medicare but lose the 1964 Election",
      "difficulty": 2,
      "image": "img/graphics/post_medicare.jpg"
    },
    {
      "id": "northern-question",
      "name": "A Northern Recovery",
      "description": "The North's Living Standards are 'Adequate' or above",
      "difficulty": 3,
      "image": "img/misc_photos/cree_women.jpg"
    },
    {
      "id": "farmer-labor",
      "name": "The Farmer-Labor Party",
      "description": "CCF(SS) worker and farmer support are both above 50% by game end",
      "difficulty": 4,
      "image": "img/CCF_logo_nobg.png"
    },
    {
      "id": "sask-waffle",
      "name": "Towards a Socialist Saskatchewan",
      "description": "Retain the Premiership whilst enacting policies of the 'Waffle Group'",
      "difficulty": 4,
      "image": "img/graphics/cd_waffle.jpg"
    },
    {
      "id": "waffle-success",
      "name": "Waffling to the Left",
      "description": "The Waffle Manifesto Passes at the 1969 Federal NDP Convention",
      "difficulty": 4,
      "image": "img/graphics/waffle-ndp_caricature.jpg"
    }, 
    {
      "id": "northern-centralization",
      "name": "Northern Experiment",
      "description": "By the end of the game, the Northern economy remains predominantly state-controlled",
      "difficulty": 2,
      "image": "img/cities/uranium_city_overhead.jpg"
    }, 
    {
      "id": "potash-operation",
      "name": "Poh-tash?",
      "description": "The Potash Industry is booming by end date",
      "difficulty": 3,
      "image": "img/misc_photos/potash_operation.jpg"
    }, 
    {
      "id": "indigenous-responsibility",
      "name": "Corralling the Buffallo",
      "description": "Negotiate the administering of Indian welfare and programs to Saskatchewan",
      "difficulty": 4,
      "image": "img/misc_photos/big_bear_fort_pitt"
    }, 
  ]
}

window.achievements_loader = function(container) {
  var Q = window.dendryUI?.dendryEngine?.state?.qualities;
  if (!Q) return;

  var achievements = window.achievements_list.achievements;
  var display = "";

  var difficulty_colors = ['#64b52a', '#90b52a', '#b0a52a', '#b56b2a', '#b54f2a']


  for (var achievement of achievements) {
    var lock_state = Q[achievement.id] ? '--unlocked' : '--locked';
    var difficulty = achievement.difficulty;
    var difficultyColor = difficulty_colors[difficulty];

    display += `<div class="achievement achievement${lock_state}" style="display:flex">
      <div class="achievement-image achievement-image${lock_state}">
        <img src="${achievement.image}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="achievement-body">
        <div class="achievement-title achievement-title${lock_state}">
          <span>${achievement.name}</span>
          <!-- <span style="color:${difficultyColor};font-size:0.75em;font-weight:bold;white-space:nowrap;">${difficulty}</span> -->
          <div class="box" style="background-color:${difficultyColor}; outline: 2px; outline-style: solid; height:1.2em; width: 1.2em;"> </div>
        </div>
        <div class="achievement-description achievement-description${lock_state}">
          ${achievement.description}
        </div>
      </div>
    </div>`;
    console.log("w");
  }

  if (container) {
    Q[container] = display;
  }
  
  //Q.achievement_set = display;
};