define(function(require) {
  var templates = require("templates");
  var player1Data;
  var player2Data;
  return {
    pile: function() {
      $("#pile").html(templates.pile());
    },
    player1: function(data) {
      console.log("Player 1: ", data);
      player1Data = {
        "player": 1,
        "remaining": data.remaining,
        "id": data.deck_id,
      };
      if (data.cards){
        player1Data.image = data.cards[0].image;
        player1Data.value = data.cards[0].value;
      }
      $("#player1").html(templates.player(player1Data));
    },
    player2: function(data) {
      console.log("Player 2: ", data);
      player2Data = {
        "player": 2,
        "remaining": data.remaining,
        "id": data.deck_id,
      };
      if (data.cards){
        player2Data.image = data.cards[0].image;
        player2Data.value = data.cards[0].value;
      }
      console.log(player2Data);
      $("#player2").html(templates.player(player2Data));
    },
    getPlayer1: function(){
      return player1Data;
    },
    getPlayer2: function(){
      return player2Data;
    }
  };
});