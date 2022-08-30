const throttle = require('lodash.throttle');
throttle(onForm, 1000); 


// const isVideoWatchTime ='videoplayer-current-time';
player.on('timeupdate', function() {
  console.log('played the video!');
});


player.setCurrentTime(30.456).then(function(seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});
