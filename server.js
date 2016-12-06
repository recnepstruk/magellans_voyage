var express = require('express')
var app = express();

var PORT = 9999;

app.listen(PORT, (err)=>{
	if(err) {
		console.log('Shits fucked mmkay??', err);
	} else {
		console.log('Would you look at that!? Now connected to: ', PORT);
	}
});

