define(function(require) {
  var templates = require("templates");
  var check = require("check-win");
  var player1Data;
  var player2Data;
  return {
    pile: function() {
      $("#pile").html(templates.pile());
    },
    player1: function(data) {
      player1Data = {
        "player": 1,
        "remaining": data.remaining,
        "id": data.deck_id,
      };
      if (data.cards){
        player1Data.image = data.cards[0].image;
        player1Data.value = data.cards[0].value;
        player1Data = check.convertValue(player1Data);
        if (player1Data.remaining === player2Data.remaining) {
          check.compareValues(player1Data, player2Data);
          if (player1Data.remaining === 0) {
            check.finalScore();
          }
        }
      }
      $("#player1").html(templates.player(player1Data));
      console.log("Player 1: ", player1Data);
    },
    player2: function(data) {
      player2Data = {
        "player": 2,
        "remaining": data.remaining,
        "id": data.deck_id,
      };
      if (data.cards){
        player2Data.image = data.cards[0].image;
        player2Data.value = data.cards[0].value;
        player2Data = check.convertValue(player2Data);
        if (player1Data.remaining === player2Data.remaining) {
          check.compareValues(player1Data, player2Data);
          if (player2Data.remaining === 0) {
            check.finalScore();
          }
        }
      }
      
      $("#player2").html(templates.player(player2Data));
      console.log("Player 2: ", player2Data);
    },
    getPlayer1: function(){
      return player1Data;
    },
    getPlayer2: function(){
      return player2Data;
    }
  };
});