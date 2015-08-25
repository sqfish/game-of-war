define(function(require) {
  return {
    newDeck: function(id, callback){
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      }).done(function(data){
        id = data.deck_id;
        console.log(id);
        callback.call(this, data);
      });
    }
  };
});