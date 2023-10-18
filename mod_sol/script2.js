(function(window) {
  var names = ["Yaakov", "John", "Jason", "Paul", "Frank", "Larry", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
      hellospeaker.speak(names[i]); // Say "Hello" for names starting with 'J' or 'j'
    } else {
      byespeaker.speak(names[i]);  // Say "Good Bye" for other names
    }
  }
})(window);
