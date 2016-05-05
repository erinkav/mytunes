// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.on('this.change()', this.render, this);
    var func = function() { this.model.ended(); }; 
    this.$el.on('ended', func.bind(this)); 

    // debugger; 
    // this.el.on('ended', function() { 
    //   console.log(this.$el.ended); 
    //   this.model.ended; //http://backbonejs.org/#View-events
    // }); 
  },

  // events: {
  //   'ended': "triggerEnd"
  // }, 

  // triggerEnd: function(e) {
  //   debugger; 
  //     this.model.ended; 
  // },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    console.log(this.$el); 
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
