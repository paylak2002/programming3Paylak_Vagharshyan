var socket = io.connect('http://localhost:3000');
function setup(){
	createCanvas(30 * 10,15 * 10);
	background('#000');
}
function draw(){
	socket.on('matrix',function(data){
		console.log(data);
	});
}