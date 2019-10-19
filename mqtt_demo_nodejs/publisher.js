/*
####################################
Author   : Geshwar Kumar Dhankar
Project  : Demo of MQTT Protocol
License  : Ddatum IT Solutions LLP
####################################
*/

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1");
client.on('connect',function(){
	setInterval(function(){
		client.publish('Topic1','Hello world!');
		console.log('Topic published!');
	},5000);
})
