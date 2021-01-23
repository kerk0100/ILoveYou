// function playAudio(url) {
//     new Audio(url).play();
// }

// function pauseAudio(url) {
//     new Audio(url).pause();
// }
function stopAll() {
    var media = document.getElementsByClassName('media'),
        i = media.length;

    while (i--) {
        media[i].volume = 0;
    }
}

function playAudio(song) {

    var audio = document.getElementById(song);

    audio.currentTime = 0
    audio.loop = false;
    audio.play();
}