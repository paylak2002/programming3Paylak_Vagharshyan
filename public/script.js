var xoteri_guyn = '';
var socket = io.connect('http://localhost:3000');
function setup(){
	createCanvas(30 * 15,30 * 15);
	background('#acacac');
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
				fill('#acacac');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 1)
			{
				fill(xoteri_guyn);
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 2)
			{
				fill('yellow');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 3)
			{
				fill('red');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 4)
			{
				fill('orange');
				rect(j * 15,i * 15,15,15);
			}
			else if(data[i][j] == 5)
			{
				fill('black');
				rect(j * 15,i * 15,15,15);
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
		xoteri_guyn = 'lightyellow';
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
