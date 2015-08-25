requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "q": "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {exports: "Firebase"}
  }
});

requirejs(["dependencies", "new-game", "populate-dom", "draw-card"], function(dependencies, newGame, popdom, draw){
  $(document).on("click", "#newGame", function(){

    var p1_id,
        p2_id;
    newGame.newDeck(p1_id, popdom.player1);
    newGame.newDeck(p2_id, popdom.player2);
    popdom.pile();
  });

  $(document).on("click", "#drawCard", function(){
    var p1_id = popdom.getPlayer1().id;
    var p2_id = popdom.getPlayer2().id;
    draw.drawCard(p1_id, popdom.player1);
    draw.drawCard(p2_id, popdom.player2);
  });
});