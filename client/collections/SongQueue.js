// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.set('order', []); 
  },

  list: [],

  playFirst: function() {
    this.list[0].play; 
    this.list.splice(0, 1); 
  },

  add: function(song) {
    if (this.list.length === 0) {
      this.list.push(song); 
      this.playFirst();
    } else {
      this.list.push(song); 
    }
  }
});