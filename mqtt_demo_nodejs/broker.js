/*
####################################
Author   : Geshwar Kumar Dhankar
Project  : Demo of MQTT Protocol
License  : Ddatum IT Solutions LLP
####################################
*/
var mqtt    = require('mqtt');
var client  = mqtt.connect("mqtt://127.0.0.1",{clientId:"ClientID001"});
	console.log("connected flag  "+client.connected);
	client.on("connect",function(){
	console.log("connected  "+client.connected);
})
