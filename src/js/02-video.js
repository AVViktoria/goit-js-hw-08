import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(updatePosition, 1000));

function updatePosition ({seconds}){
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));




// * @param {number} currentTime
// * @return {SetCurrentTimePromise}
// */
// setCurrentTime(currentTime) {
//    return this.set('currentTime', currentTime);
// }

// function setVideoTime(player, seconds) {
// 	player.setCurrentTime(seconds).then(function() {
// 		return player.play();
// 	});
// }
