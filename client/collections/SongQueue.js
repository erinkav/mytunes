// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() { 
      if (this.models.length > 0) {
        this.playFirst(); 
      }
    }); 
    this.on('dequeue', function() { 
      console.log('dequeue called');
      this.remove()
      );  
  },

  playFirst: function() {
    this.models[0].play(); 
  }
});