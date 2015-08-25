define(function(require) {
  return {
    newDeck: function(callback){
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      }).done(function(data){
        callback.call(this, data);
      });
    },
  };
});