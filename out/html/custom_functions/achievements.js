window.achievements_list = {
  "achievements": [
    {
      "id": "game_completed",
      "name": "Finished the Game",
      "description": "Finish the game! Woohoo!",
      "difficulty": 0,
      "image": "img/misc_graphics/Wheat_Bundle.png"
    },
    {
      "id": "woodrow-win",
      "name": "The Lloyd Years",
      "description": "Woodrow Lloyd is reelected as Premier of Saskatchewna",
      "difficulty": 2,
      "image": "img/portraits/LloydWoodrow.jpg"
    },
    {
      "id": "thatcher-win",
      "name": "The Iron... Gentleman?",
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
      "id": "sask-waffle",
      "name": "Towards a Socialist Saskatchewan",
      "description": "Retain the Premiership whilst enacting policies of the 'Waffle Group'",
      "difficulty": 4,
      "image": "img/CCF/waffle.jpg"
    },
    {
      "id": "waffle-success",
      "name": "Waffling to the Left",
      "description": "The Waffle Manifesto Passes at the 1969 Federal NDP Convention",
      "difficulty": 2,
      "image": "img/graphics/waffle-ndp_caricature"
    }
  ]
}

window.achievements_loader = function(container) {
  var Q = window.dendryUI?.dendryEngine?.state?.qualities;
  if (!Q) return;

  var achievements = window.achievements_list.achievements;
  var display = "";

  var difficulty_colors = ['#64b52a', '#90b52a', '#b0a52a', '#b56b2a', '#b54f2a']


  var difficulty = achievement.difficulty;
  var difficultyColor = difficulty_colors[difficulty];

  for (var achievement of achievements) {
    var lock_state = Q[achievement.id] ? '--unlocked' : '--locked';

    display += `<div class="achievement achievement${lock_state}" style="display:flex">
      <div class="achievement-image achievement-image${lock_state}">
        <img src="${achievement.image}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="achievement-body">
        <div class="achievement-title achievement-title${lock_state}">
          <span>${achievement.name}</span>
          <span style="color:${difficultyColor};font-size:0.75em;font-weight:bold;white-space:nowrap;">${difficulty}</span>
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