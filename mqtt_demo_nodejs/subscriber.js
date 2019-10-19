/*
####################################
Author   : Geshwar Kumar Dhankar
Project  : Demo of MQTT Protocol
License  : Ddatum IT Solutions LLP
####################################
*/

/* MQTT Connection Stablishment */
var dateFormat = require("dateformat");
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1");
client.on('connect',function(){
	/* set subscriber to topic*/
	client.subscribe('Topic1')
})

/* Check Connection Stablished Or Not */
con.connect(function(err) {
	if (err) throw err;
	client.on('message',function(topic,message){
		context = message.toString();
		console.log("Topic= "+topic+" Message= "+message);
	})
});
