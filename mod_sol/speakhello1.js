(function(window) {
  var hellospeaker = {};

  var speakWord = "Hello";

  hellospeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  window.hellospeaker = hellospeaker;
})(window);
