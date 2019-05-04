var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

//Accès vers twitter
var T = new Twit(config);



//Setup communication
var http = require("http");
var url = require("url");
var path = require("path");
var ServerIP = 'nathanaeltardif.com',
    port = '8080';

var Server = http.createServer(
	function (request , response) {
    	console.log("Request Recieved");
    	request.on('data', function (chunk) {
		    console.log('GOT DATA! ' + chunk);
		    tweet(chunk.toString());
		});

		// request.on('end', function () {
	 //        console.log("end");
	 //    });

	 //    response.writeHead(200, {'Content-Type': 'text/html'});
  //   	response.end('callback(\'{\"msg\": \"OK\"}\')');
    }
); 

Server.listen(port, ServerIP, function () {
    console.log("Listening..." + ServerIP + ":" + port);
});




//Tweet functions
function tweet(contenu) {
	console.log("tweeting");
	var params = {
		status: contenu
	};
	T.post(
		'statuses/update', 
		params, 
		function(err, data, response) {
		    console.log(data)
		}
	);
}


// tuto AJAX
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT ||3000, () => {
  console.log('Connected!');
})


app.get(`/`, (req, res)=>{
  res.send('Hello');
})

app.post('/test', (req, res) => {
  console.log(req.body);

  setTimeout(()=>{
    console.log('Get imagesURL successful');
    res.send('feedback');
  },2000)
})