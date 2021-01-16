// function playAudio(url) {
//     new Audio(url).play();
// }

// function pauseAudio(url) {
//     new Audio(url).pause();
// }

function playAudio(url) {
    var audio = new Audio(url);
    if (audio.paused) {
        audio.loop = false;
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}