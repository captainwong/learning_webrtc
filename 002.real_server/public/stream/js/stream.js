'use strict'

var player = document.querySelector("video#player");

if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices || !navigator.mediaDevices.getUserMedia){
    console.log('enumerateDevices or getUserMedia not supported!');
}else{

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(function(stream){
        player.srcObject = stream;
    }).catch(function(err){
        console.log('getUserMedia failed:', err);
    });
}
