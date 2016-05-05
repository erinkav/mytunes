// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.set('order', []); 
  },

  list: [],

  playFirst: function() {
    console.log(this); 
    this.play(this.list[0]); 
    this.list.splice(0, 1); 
  },

  add: function(song) {
    this.list.push(song); 
    this.playFirst(); 

  }
});