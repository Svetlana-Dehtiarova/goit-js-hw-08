import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  const stopTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time') || 0
  );
  player.setCurrentTime(stopTime);
}
