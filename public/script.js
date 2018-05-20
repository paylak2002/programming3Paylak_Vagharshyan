var socket = io.connect('http://localhost:3000');
socket.on('matrix',function(data){
	console.log(data);
});