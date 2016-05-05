// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.on('change', this.render, this); 
    this.$el.on('ended', function() { 
      console.log('ended'); //http://backbonejs.org/#View-events
    }); 
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    console.log(this.$el); 
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
