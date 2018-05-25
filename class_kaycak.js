var variable = require("./var");
var cnox = require("./class_kendani");
module.exports.class_kaycak = class kaycak extends cnox.class_kendani {
	constructor(x, y, index) {
		super(x, y);
		this.i = index;
	}
	yntrelVandak(ch) {
		this.cord();
		return super.yntrelVandak(ch);
	}
	move() {
		if (random(this.yntrelVandak(0))) {
			variable.matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(0));
			variable.matrix[ran[1]][ran[0]] = 4;
			this.x = ran[0];
			this.y = ran[1];
		}
		this.cord();
	}
	krakel() {

		for (var i = 0; i < variable.matrix[this.y].length; i++) {
			if (i != this.x) {
				if (variable.matrix[this.y][i] == 1) {
					for (var k in variable.xoter) {
						if (variable.xoter[k].x == i && variable.xoter[k].y == this.y) {
							variable.xoter.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[this.y][i] == 2) {
					for (var k in variable.kover) {
						if (variable.kover[k].x == i && variable.kover[k].y == this.y) {
							var obj = {
								name 		: 'xotaker',
								time 		: variable.time,
								patjar	: 'mahacel e kaycakic'
							}
							variable.arr_obj.push(obj);
							variable.kover.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[this.y][i] == 3) {
					for (var k in variable.gishatichner) {
						if (variable.gishatichner[k].x == i && variable.gishatichner[k].y == this.y) {
							var obj = {
								name 		: 'gishatich',
								time 		: variable.time,
								patjar	: 'mahacel e kaycakic'
							}
							variable.arr_obj.push(obj);
							variable.gishatichner.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[this.y][i] == 5) {
					for (var k in variable.hakakaycakner) {
						if (variable.hakakaycakner[k].x == i && variable.hakakaycakner[k].y == this.y) {
							var obj = {
								name 		: 'hakakaycak',
								time 		: variable.time,
								patjar	: 'mahacel e kaycakic'
							}
							variable.arr_obj.push(obj);
							variable.hakakaycakner.splice(k, 1);
							break;
						}
					}
				}
				variable.matrix[this.y][i] = 0;
			}
		}
		for (var i = 0; i < variable.matrix.length; i++) {
			if (i != this.y) {
				if (variable.matrix[i][this.x] == 1) {
					for (var k in variable.xoter) {
						if (variable.xoter[k].y == i && variable.xoter[k].x == this.x) {
							variable.xoter.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[i][this.x] == 2) {
					for (var k in variable.kover) {
						if (variable.kover[k].y == i && variable.kover[k].x == this.x) {
							var obj = {
								name 		: 'xotaker',
								time 		: variable.time,
								patjar	: 'sovic'
							}
							variable.arr_obj.push(obj);
							variable.kover.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[i][this.x] == 3) {
					for (var k in variable.gishatich) {
						if (variable.gishatich[k].y == i && variable.gishatich[k].x == this.x) {
							var obj = {
								name 		: 'gishatich',
								time 		: variable.time,
								patjar	: 'mahacel e kaycakic'
							}
							variable.arr_obj.push(obj);
							variable.gishatich.splice(k, 1);
							break;
						}
					}
				}
				else if (variable.matrix[i][this.x] == 5) {
					for (var k in variable.hakakaycakner) {
						if (variable.hakakaycakner[k].y == i && variable.hakakaycakner[k].x == this.x) {
							var obj = {
								name 		: 'hakakaycak',
								time 		: variable.time,
								patjar	: 'mahacel e kaycakic'
							}
							variable.arr_obj.push(obj);
							variable.hakakaycakner.splice(k, 1);
							break;
						}
					}
				}
				variable.matrix[i][this.x] = 0;
			}
		}
	}
	die() {
		if (variable.kover.length == 0 && variable.gishatichner.length == 0) {
			variable.kaycakner.splice(this.i, 1);
			variable.matrix[this.y][this.x] = 0;
			variable.bool = false;
		}
	}
}
