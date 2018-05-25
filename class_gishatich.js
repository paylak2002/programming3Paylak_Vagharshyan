var variable = require("./var");
var cnox = require("./class_kendani");
module.exports.class_gishatich = class gishatich extends cnox.class_kendani {
	constructor(x, y, i) {
		super(x, y);
		if(exanak_global == 0)
		{
			this.e = 20;
		}
		else if(exanak_global == 3)
		{
			this.e = 10;
		}
		else
		{
			this.e = 15;
		}
		this.b = 0;
		this.index = i;
	}
	yntrelVandak(ch) {
		this.cord();
		return super.yntrelVandak(ch);
	}
	die() {
		for (var i in variable.gishatichner) {
			if (variable.gishatichner[i].x == this.x && variable.gishatichner[i].y == this.y) {
				var obj = {
					name 		: 'gishatich',
					time 		: variable.time,
					patjar	: 'sovic'
				}
				variable.arr_obj.push(obj);
				variable.gishatichner.splice(i, 1);
				variable.matrix[this.y][this.x] = 0;
			}
		}
	}
	move() {
		if (random(this.yntrelVandak(2))) {
			variable.matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(2));
			for (var i in variable.kover) {
				if (variable.kover[i].x == ran[0] && variable.kover[i].y == ran[1]) {
					var obj = {
						name 		: 'xotaker',
						time 		: variable.time,
						patjar	: 'kerel e gishatichy'
					}
					variable.arr_obj.push(obj);
					variable.kover.splice(i, 1);
				}
			}
			variable.matrix[ran[1]][ran[0]] = 3;
			this.x = ran[0];
			this.y = ran[1];
			this.e = 8;
			this.b++;
		}
		else {
			if (random(this.yntrelVandak(0))) {
				variable.matrix[this.y][this.x] = 0;
				for (var i in variable.xoter) {
					if (variable.xoter[i].x == this.x && variable.xoter[i].y == this.y) {
						variable.matrix[this.y][this.x] = 1;
					}
				}
				var ran = random(this.yntrelVandak(0));
				variable.matrix[ran[1]][ran[0]] = 3;
				this.x = ran[0];
				this.y = ran[1];
			}
			/////////////////////////////////////////////
			else if (random(this.yntrelVandak(1))) {
				for (var i in variable.xoter) {
					if (!(variable.xoter[i].x == this.x && variable.xoter[i].y == this.y)) {
						variable.matrix[this.y][this.x] = 0;
					}
				}
				variable.matrix[this.y][this.x] = 1;
				var ran = random(this.yntrelVandak(1));
				variable.matrix[ran[1]][ran[0]] = 3;
				this.x = ran[0];
				this.y = ran[1];
			}
			////////////////////////////////////////
			this.e--;
		}
		if (this.e <= 0) {
			this.die();
		}
		if (this.b >= 15) {
			if (random(this.yntrelVandak(0))) {
				var ran = random(this.yntrelVandak(0));
				variable.matrix[ran[1]][ran[0]] = 2;
				variable.gishatichner.push(new gishatich(ran[0], ran[1]));
			}
		}
		this.cord();
	}
}
