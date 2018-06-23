var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos)


//req (request)= La petición que el navegador le esta pidiendo al servidor
//res (response) = Lo que el servidor le quiere mandar al navegador
function inicio(req, res){
	res.send("Este es el home!");
}

function cursos(req, res){
	res.send("Estos son los <strong>cursos</strong> que ofrecemos");
}

app.listen(8989);
