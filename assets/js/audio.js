// function playAudio(url) {
//     new Audio(url).play();
//   }

// function pauseAudio(url) {
//     new Audio(url).pause();
//   }

function playAudio(url) {
    if (Audio(url).paused) {
        Audio(url).play();
    }else{
        Audio(url).pause();
        Audio(url).currentTime = 0
    }
}