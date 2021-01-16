// function playAudio(url) {
//     new Audio(url).play();
// }

// function pauseAudio(url) {
//     new Audio(url).pause();
// }

function playAudio(url) {
    var audio = new Audio('songs/test.mp3');
    // if (audio.paused) {
    //     audio.currentTime = 0;
    //     audio.play();
    // }else{
    //     audio.pause();
    //     //audio.currentTime = 0
    // }
    var audio1 = new Audio('songs/test.mp3');
    var audio2 = new Audio('songs/test2.mp3');
    var audio3 = new Audio('songs/test3.mp3');
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio.play();
}