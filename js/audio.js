var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = " &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = " &#9658;";
    }
}