'use strict'

if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices){
    console.log('enumerateDevices not supported!');
}else{
    navigator.mediaDevices.enumerateDevices()
        .then(function(devices){
            devices.forEach(function(device){
                console.log(device.kind + 
                    ": label=" + device.label +
                    ": id=" + device.deviceId +
                    ": groupId=" + device.groupId);
            });
        })
        .catch(function(err){
            console.log(err.name + ":" + err.message);
        });
}
