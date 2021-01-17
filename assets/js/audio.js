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

function playAudio(song, pause1) {
    // var media = document.getElementsByClassName('content'),
    //     i = media.length;

    // while (i--) {
    //     media[i].volume = 0;
    // }
    //var audio = new Audio(url);
    // var stop = document.getElementsByClassName('audio'),
    //     i = stop.length;
    // while (i--) {
    //     stop[i].pause();
    // }
    var audio = document.getElementById(song);
    var pause = document.getElementById(pause1);
    pause.pause();

    if (audio.paused) {
        audio.currentTime = 0
        audio.loop = false;
        audio.play();
    }else{
        audio.pause();
        //audio.currentTime = 0
    }
}