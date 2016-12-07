var express = require('express')
var app = express();
var PORT = 9999;

app.get('/', (req, res)=>{
	res.send("<h2>Hello traveler. Welcome to Seville!</h2> <form method='GET' action='/canaryislands'><button type='submit'>Travel!</button></form><img src='http://cp91279.biography.com/BIO_Bio-Shorts_0_Ferdinand-Magellan_149622_SF_NEW_HD_768x432-16x9.jpg'/>");
});

app.get('/canaryislands', (req, res)=>{
	res.send("<h2>You are in the Canary Islands!</h2> <form method='GET' action='/capeverde'><button type='submit'>Travel!</button></form><img src='http://www.emersonkent.com/images/canary_islands_map.jpg' style='height=98vh; width:98vw'/>");
});

app.get('/capeverde', (req, res)=>{
	res.send("<h2>You are in Cape Verde!</h2> <form method='GET' action='/strait'><button type='submit'>Travel!</button></form> <img src='https://upload.wikimedia.org/wikipedia/commons/4/44/Cape_Verde_1746_map.jpg' style='height=50%; width:98vw'/>");
});

app.get('/strait', (req, res)=>{
	res.send("<h2>You are in the Strait of Magellan!</h2> <form method='GET' action='/guam'><button type='submit'>Travel!</button></form> <img src='https://s-media-cache-ak0.pinimg.com/736x/db/1f/8a/db1f8a327e5611baf9731e1b9da06b79.jpg'/>");
});

app.get('/guam', (req, res)=>{
	res.send("<h2>You are in Guam!</h2> <form method='GET' action='/phillipines'><button type='submit'>Travel!</button></form> <img src='http://www.janesoceania.com/guam_1900/map.jpg'/>");
});

app.get('/phillipines', (req, res)=>{
	res.send("You've made it to your destination, the Phillipines! <form method='GET' action='/'><button type='submit'>Return Home</button></form> <img src='http://www8.gmanews.tv/webpics/v3/2012/07/PetrusKaerius-map-070212.jpg'/>");
});

app.get('*', (req, res)=>{
	res.send("<h1>Magellan did not travel to this location!</h1><img src='https://cdn4.iconfinder.com/data/icons/smiley-vol-3-2/48/134-512.png'/>");
});

app.listen(PORT, (err)=>{
	if(err) {
		console.log('Shits fucked mmkay??', err);
	} else {
		console.log('Would you look at that!? Now connected to: ', PORT);
	}
});

