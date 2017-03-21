'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const request = require('request')

const app = express();

app.set('port',(process.env.PORT || 5000))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.get('/', function(req,res){
	res.rend("Hello I am a chatbot")
})


app.get('/webhook/', function(req,res){
	if(req.query['hub.verify_token'] === 'UnBot'){
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")		
})

app.listen(app.get('port'), function(){
	console.log("Running port")
})