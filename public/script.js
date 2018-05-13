function setup() {
	createCanvas(X * S, Y * S);
	background("'#acacac");
}

function draw() {
	for (var i = 0; i < matrix.length; ++i) {
		for (var j = 0; j < matrix[i].length; ++j) {
			if (matrix[i][j] == 0) {
				fill('#acacac');
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 1) {
				fill(0, 250, 0);
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 2) {
				fill(0, 0, 250);
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 3) {
				fill(500, 0, 0);
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 4) {
				fill("yellow");
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 5) {
				fill("black");
				rect(j * S, i * S, S, S);
			}
		}
	}
}