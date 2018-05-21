var variable = require("./var");
var cnox = require("./class_kendani");
module.exports.class_kov = class kov extends cnox.class_kendani {
	constructor(x, y, i) {
		super(x, y);
		this.e = 5;
		this.b = 0;
		this.index = i;
	}
	yntrelVandak(ch) {
		this.cord();
		return super.yntrelVandak(ch);
	}
	die() {
		for (var i in variable.kover) {
			if (variable.kover[i].x == this.x && variable.kover[i].y == this.y) {
				variable.kover.splice(i, 1);
				variable.matrix[this.y][this.x] = 0;
				break;
			}
		}
	}
	move() {
		if (random(this.yntrelVandak(1))) {
			variable.matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(1));
			for (var i in variable.xoter) {
				if (variable.xoter[i].x == ran[0] && variable.xoter[i].y == ran[1]) {
					variable.xoter.splice(i, 1);
				}
			}
			this.e = 8;
			this.b++;
			variable.matrix[ran[1]][ran[0]] = 2;
			this.x = ran[0];
			this.y = ran[1];
		}
		else {
			variable.matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(0));
			this.e--;
			this.b = 0;
			if (ran) {
				variable.matrix[ran[1]][ran[0]] = 2;
				this.x = ran[0];
				this.y = ran[1];
			}
		}
		this.cord();
		if (this.e <= 0) {
			this.die();
		}
		if (this.b >= 2) {
			var ran = random(this.yntrelVandak(0));
			variable.matrix[ran[1]][ran[0]] = 2;
			variable.kover.push(new kov(ran[0], ran[1]));
		}
	}
}
