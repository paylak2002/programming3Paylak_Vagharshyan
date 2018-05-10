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
	console.log(variable.matrix);
//////////////////////////////////////////////////////////////
},500);







































// /////////////////////////kaycakneri verakendanacman hamar///////////////////////////
// var arrR = [[0, 0], [variable.matrix[0].length - 1, variable.matrix.length - 1]];
// var rXY = Math.floor(Math.random() * 2);
// if (variable.kover.length != 0 && variable.gishatichner.length != 0) {
// 	if (variable.kaycakner.length == 0) {
// 		if (variable.matrix[rXY[1]][rXY[0]] == 1) {
// 			for (var k in variable.xoter) {
// 				if (variable.xoter[k].x == rXY[0] && variable.xoter[k].y == rXY[1]) {
// 					variable.xoter.splice(k, 1);
// 				}
// 			}
// 		}
// 		else if (variable.matrix[rXY[1]][rXY[0]] == 2) {
// 			for (var k in variable.kover) {
// 				if (variable.kover[k].x == rXY[0] && variable.kover[k].y == rXY[1]) {
// 					variable.kover.splice(k, 1);
// 				}
// 			}
// 		}
// 		else if (variable.matrix[rXY[1]][rXY[0]] == 3) {
// 			for (var k in variable.gishatichner) {
// 				if (variable.gishatichner[k].x == rXY[0] && variable.gishatichner[k].y == rXY[1]) {
// 					variable.gishatichner.splice(k, 1);
// 				}
// 			}
// 		}
// 		else if (variable.matrix[rXY[1]][rXY[0]] == 5) {
// 			for (var k in variable.hakakaycakner) {
// 				if (variable.hakakaycakner[k].x == rXY[0] && variable.hakakaycakner[k].y == rXY[1]) {
// 					variable.hakakaycakner.splice(k, 1);
// 				}
// 			}
// 		}
// 		variable.kaycakner.push(new kaycak(rXY[0], rXY[1], variable.kaycakner.length));
// 		variable.matrix[rXY[1]][rXY[0]] = 4;
// 	}
// }
// //////////////////////////////////////////////////////////////////////////////