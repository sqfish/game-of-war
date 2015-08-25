define(function(require) {
  // var popdom = require("populate-dom");
  var p1score = 0;
  var p2score = 0;
  return {
    convertValue: function(playerData) {
      var currentValue = playerData.value;
      var newValue;
      switch(currentValue) {
        case "JACK":
          newValue = 11;
          break;
        case "QUEEN":
          newValue = 12;
          break;
        case "KING":
          newValue = 13;
          break;
        case "ACE":
          newValue = 14;
          break;
        default:
          newValue = currentValue;
      }
      playerData.value = newValue;
      return playerData;
    },
    compareValues: function(player1Data, player2Data) {
      if (Number(player1Data.value) > Number(player2Data.value)) {
        p1score = p1score + 1;
        console.log("One pt for player 1", p1score);
      } else if (Number(player1Data.value) < Number(player2Data.value)) {
        p2score = p2score + 1;
        console.log("One pt for player 2", p2score);
      }
      return {
        player1Data, player2Data
      }
    },
    finalScore: function() {
      var winner = {};
      if (p1score > p2score) {
        winner.id = 1;
        console.log("p1 wins");
      } else if (p2score > p1score) {
        winner.id = 2;
        console.log("p2 wins");
      }
      var templates = require("templates");
      $("#pile").html(templates.newGame(winner));
    }
  };
});