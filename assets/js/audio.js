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
    // var media = document.getElementsByClassName('content'),
    //     i = media.length;

    // while (i--) {
    //     media[i].volume = 0;
    // }
    //var audio = new Audio(url);
    var stop = document.getElementsByClassName('audio'),
        i = stop.length;
    while (i--) {
        stop[i].volume = 0
    }
    var audio = document.getElementById(song);

    if (audio.paused) {
        audio.loop = false;
        audio.play();
    }else{
        audio.pause();
        //audio.currentTime = 0
    }
}