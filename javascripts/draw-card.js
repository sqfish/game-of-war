define(function(require) {
  return {
    drawCard: function(id, callback){
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=1"
      }).done(function(data){
        id = data.deck_id;
        console.log(id);
        callback.call(this, data);
      });
    }
  };
});