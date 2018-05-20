var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});

server.listen(3000, function(){
   console.log("Start");
});
var variable = require("./var");
var kendaniner_class = {
	gish : require("./class_gishatich").class_gishatich,
	haka : require("./class_hakakaycak").class_hakakaycak,
	kayc : require("./class_kaycak").class_kaycak,
	ko : require("./class_kov").class_kov,
	xo : require("./class_xot").class_xot
}
//////////////////////hakakaycakneri grancman hamar///////////////////
for (var i = 0; i < variable.matrix.length; ++i) {
	for (var j = 0; j < variable.matrix[i].length; ++j) {
		if (variable.matrix[i][j] == 5) {
			variable.hakakaycakner.push(new kendaniner_class.haka(j, i, variable.hakakaycakner.length));
		}
	}
}
//////////////////////kaycakneri grancman kamar vorpes obekr//////////
for (var i = 0; i < variable.matrix.length; ++i) {
	for (var j = 0; j < variable.matrix[i].length; ++j) {
		if (variable.matrix[i][j] == 4) {
			variable.kaycakner.push(new kendaniner_class.kayc(j, i, variable.kaycakner.length));
		}
	}
}
//////////////////////gishatichneri grancman hamar/////////////////////
for (var i = 0; i < variable.matrix.length; ++i) {
	for (var j = 0; j < variable.matrix[i].length; ++j) {
		if (variable.matrix[i][j] == 3) {
			variable.gishatichner.push(new kendaniner_class.gish(j, i, variable.gishatichner.length));
		}
	}
}
/////////////////////////////////////////////////////////////////////////////

///////////////////////exac xoteri grancumo vorpes obekt////////////////////

for (var i = 0; i < variable.matrix.length; ++i) {
	for (var j = 0; j < variable.matrix[i].length; ++j) {
		if (variable.matrix[i][j] == 1) {
			variable.xoter.push(new kendaniner_class.xo(j, i));
		}
	}
}
//////////////////////         koveri grancman hamar          //////////////////////////

for (var i = 0; i < variable.matrix.length; ++i) {
	for (var j = 0; j < variable.matrix[i].length; ++j) {
		if (variable.matrix[i][j] == 2) {
			variable.kover.push(new kendaniner_class.ko(j, i, variable.kover.length));
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////

io.on('connection',function(socket){
	setInterval(function(){
///////////////////////////////////////////////////////////////
		variable.multiply++;
		variable.multiply1++;
		variable.multiply2++;
		variable.multiply3++;
		if (variable.multiply >= 1) {
			for (var i in variable.xoter) {
				variable.xoter[i].mull();
			}
			variable.multiply = 0;
		}
		if (variable.multiply2 >= 2) {
			for (var i in variable.kover) {
				variable.kover[i].move();
			}
			variable.multiply2 = 0;
		}
		if (variable.multiply1 >= 3) {
			for (var i in variable.gishatichner) {
				variable.gishatichner[i].move();
			}
			variable.multiply1 = 0;
		}
		if (variable.multiply3 >= 4) {
			for (var i in variable.kaycakner) {
				variable.kaycakner[i].move();
				variable.kaycakner[i].krakel();
				variable.kaycakner[i].die();
			}
			for (var i in variable.hakakaycakner) {
				variable.hakakaycakner[i].voronum();
			}
			variable.multiply3 = 0;
		}
		io.sockets.emit('matrix' ,variable.matrix);
	//////////////////////////////////////////////////////////////
	},500);
});

