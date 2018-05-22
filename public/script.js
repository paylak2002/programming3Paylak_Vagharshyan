var xoteri_guyn = '';
var socket = io.connect('http://localhost:3000');
function setup(){
	createCanvas(30 * 10,30 * 10);
	background('#000');
}
socket.on('bool',function(data){
	background('#000');
});
socket.on('matrix',function(data){
	for(var i in data)
	{
		for(var j in data[i])
		{
			if(data[i][j] == 0)
			{
				fill('#0ff');
				rect(j * 10,i * 10,10,10);
			}
			else if(data[i][j] == 1)
			{
				fill(xoteri_guyn);
				rect(j * 10,i * 10,10,10);
			}
			else if(data[i][j] == 2)
			{
				fill('yellow');
				rect(j * 10,i * 10,10,10);
			}
			else if(data[i][j] == 3)
			{
				fill('#666699');
				rect(j * 10,i * 10,10,10);
			}
			else if(data[i][j] == 4)
			{
				fill('#ffff66');
				rect(j * 10,i * 10,10,10);
			}
			else if(data[i][j] == 5)
			{
				fill('black');
				rect(j * 10,i * 10,10,10);
			}
		}
	}
});
socket.on('number',function(data){
	if(data == 0)
	{
		xoteri_guyn = 'green';
		$(document).ready(function(){
			$(".h1_text").text('Գարուն');
		});
	}
	else if(data == 1)
	{
		xoteri_guyn = 'lightgreen';
		$(document).ready(function(){
			$(".h1_text").text('Ամառ');
		});
	}
	else if(data == 2)
	{
		xoteri_guyn = 'yellow';
		$(document).ready(function(){
			$(".h1_text").text('Աշուն');
		});
	}
	else if(data == 3)
	{
		xoteri_guyn = 'lightblue';
		$(document).ready(function(){
			$(".h1_text").text('Ձմեռ');						
		});
	}
});
