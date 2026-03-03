// Source - https://stackoverflow.com/a/38665865
// Posted by Iceman, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-02, License - CC BY-SA 4.0


var myAudio = document.getElementById("audio");
var isPlaying = false;

function togglePlay() {
isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
isPlaying = true;
};
myAudio.onpause = function() {
isPlaying = false;
};