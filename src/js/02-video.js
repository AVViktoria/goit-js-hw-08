import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const PLAYER_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// *Вешаем throttle
player.on('timeupdate', throttle(updatePosition, 1000));

// *Сохраняем в локал сторадж
function updatePosition (evt){
  localStorage.setItem(PLAYER_KEY, JSON.stringify(evt.seconds));
}

// *Вытягиваем данные из  локал сторадж(продолжаем видео с остановки на секундах)
const savedVideoStorage = localStorage.getItem(PLAYER_KEY);
if (savedVideoStorage) {
  player.setCurrentTime(savedVideoStorage);
}; 

