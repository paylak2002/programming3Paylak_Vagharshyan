var variable = require("./var");
var cnox = require("./class_kendani");
module.exports.class_hakakaycak = class hakaK extends cnox.class_kendani {
	yntrelVandak(ch) {
		this.cord();
		return super.yntrelVandak(ch);
	}
	voronum() {
		var arr = this.yntrelVandak(4);
		if (variable.kaycakner.length == 1) {
			var cX = variable.kaycakner[0].x;
			var cY = variable.kaycakner[0].y;
			if (arr.length == 1) {
				var obj = {
					name 		: 'kaycak',
					time 		: variable.time,
					patjar	: 'hakakaycakneric',
					cord		: {
											x : arr[0][0],
											y : arr[0][1]
										}
				}
				variable.arr_obj.push(obj);
				variable.kaycakner.splice(0, 1);
				variable.matrix[this.y][this.x] = 0;
				variable.matrix[arr[0][1]][arr[0][0]] = 5;
				this.x = arr[0][0];
				this.y = arr[0][1];
				this.cord();
			}
			else {
				///////////////////////////arajin ev chororrd qarord/////////////////////////////
				if (cX > this.x && cY > this.y) {
					if (variable.matrix[this.y + 1][this.x + 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y + 1][this.x + 1] = 5;
						this.x++;
						this.y++;
						this.cord();
					}
				}
				else if (cX > this.x && cY < this.y) {
					if (variable.matrix[this.y - 1][this.x + 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y - 1][this.x + 1] = 5;
						this.x++;
						this.y--;
						this.cord();
					}
				}
				//////////////////////////erkrord ev erord /////////////////////////////////
				else if (cX < this.x && cY < this.y) {
					if (variable.matrix[this.y - 1][this.x - 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y - 1][this.x - 1] = 5;
						this.x--;
						this.y--;
						this.cord();
					}
				}
				else if (cX < this.x && cY > this.y) {
					if (variable.matrix[this.y + 1][this.x - 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y + 1][this.x - 1] = 5;
						this.x--;
						this.y++;
						this.cord();
					}
				}
				//////////////////////////dzax koxm//////////////////////////////
				else if (cX < this.x && cY == this.y) {
					if (variable.matrix[this.y][this.x - 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y][this.x - 1] = 5;
						this.x--;
						this.cord();
					}
				}
				//////////////////////////verev/////////////////////////////////
				else if (cX == this.x && cY < this.y) {
					if (variable.matrix[this.y - 1][this.x] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y - 1][this.x] = 5;
						this.y--;
						this.cord();
					}
				}
				/////////////////////aj koxm ///////////////////////////////////////
				else if (cX > this.x && cY == this.y) {
					if (variable.matrix[this.y][this.x + 1] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y][this.x + 1] = 5;
						this.x++;
						this.cord();
					}
				}
				/////////////////////nerkev ////////////////////////////////////////
				else if (cX == this.x && cY > this.y) {
					if (variable.matrix[this.y + 1][this.x] == 0) {
						variable.matrix[this.y][this.x] = 0;
						variable.matrix[this.y + 1][this.x] = 5;
						this.y++;
						this.cord();
					}
				}
				/////////////////////////////////////////////////////////////////
			}
		}
	}
}
