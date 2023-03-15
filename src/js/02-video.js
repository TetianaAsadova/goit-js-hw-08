import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player("vimeo-player");

const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function(time) {
    localStorage.setItem(STORAGE_KEY, time.seconds);
};
console.log(`onPlay`, onPlay);
player.on('timeupdate', throttle((onPlay), 1000)); 

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// }); 

// const savedTime = localStorage.getItem(STORAGE_KEY);

const onTime = localStorage.getItem(STORAGE_KEY);
console.log(`onTime`, onTime);
player.setCurrentTime(onTime).then(function(seconds) {
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

