var socket = io.connect('http://localhost:3000');
function setup(){
	createCanvas(5 * 10,5 * 10);
	background('#000');
}
function draw(){
	socket.on('matrix',function(data){
		for(var i in data)
		{
			for(var j in data[i])
			{
				if(data[i][j] == 0)
				{
					fill('gray');
					rect(j * 10,i * 10,10,10);
				}
				else if(data[i][j] == 1)
				{
					fill('green');
					rect(j * 10,i * 10,10,10);
				}
				else if(data[i][j] == 2)
				{
					fill('yellow');
					rect(j * 10,i * 10,10,10);
				}
				else if(data[i][j] == 3)
				{
					fill('green');
					rect(j * 10,i * 10,10,10);
				}
				else if(data[i][j] == 4)
				{
					fill('red');
					rect(j * 10,i * 10,10,10);
				}
				else if(data[i][j] == 5)
				{
					fill('bleak');
					rect(j * 10,i * 10,10,10);
				}
			}
		}
	});
}
