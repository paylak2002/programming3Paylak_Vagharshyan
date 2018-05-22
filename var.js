var S = 10;
var kaycakner = [];
var gishatichner = [];
var hakakaycakner = [];
var xoter = [];
var kover = [];
var matrix = [];
var X = 30;
var Y = 30;
var multiply1 = 0;
var multiply2 = 0;
var multiply3 = 0;
var bool = true;
var exanak = 0;
global.exanak_global = exanak;
//////////////////////patahakan matrix///////////////////////////////////
for (var i = 0; i < Y; i++) {
	matrix.push([]);
	for (var j = 0; j < X; j++) {
		var rand = Math.floor(Math.random() * 6);
		if (rand != 4) {
			matrix[i].push(rand);
		}
		else {
			matrix[i].push(0);
		}
	}
}
matrix[matrix.length - 1][matrix[0].length - 1] = 4;

global.random = function(arr){
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

module.exports = {
	S				:	S,
	kaycakner		:	kaycakner,
	gishatichner	:	gishatichner,
	hakakaycakner	:	hakakaycakner,
	xoter			:	xoter,
	kover			:	kover,
	matrix			:	matrix,
	X				:	X,
	Y				:	Y,
	multiply1		:	multiply1,
	multiply2		:	multiply2,
	multiply3		:	multiply3,
	bool			:	bool,
	exanak			:	exanak,
}
