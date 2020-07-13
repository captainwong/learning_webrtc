'use strict'

var audioinput = document.querySelector("select#audioinput");
var audiooutput = document.querySelector("select#audiooutput");
var videoinput = document.querySelector("select#videoinput");

if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices || !navigator.mediaDevices.getUserMedia){
    console.log('enumerateDevices or getUserMedia not supported!');
}else{
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(function(stream){

    }).catch(function(err){
    
    });

    navigator.mediaDevices.enumerateDevices()
        .then(function(devices){
            devices.forEach(function(device){
                console.log(device.kind + 
                    ": label=" + device.label +
                    ": id=" + device.deviceId +
                    ": groupId=" + device.groupId);

                var option = document.createElement("option");
                option.text = device.label;
                option.value = device.deviceId;

                switch(device.kind){
                    case 'audioinput':
                        audioinput.appendChild(option);
                        break;
                    case 'audiooutput':
                        audiooutput.appendChild(option);
                        break;
                    case 'videoinput':
                        videoinput.appendChild(option);
                        break;
                }
            });            
        })
        .catch(function(err){
            console.log(err.name + ":" + err.message);
        });
}
