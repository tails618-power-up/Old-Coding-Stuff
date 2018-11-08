var canvas = document.getElementById("clock");
console.log(canvas);
var ctx=canvas.getContext("2d");
var radius=canvas.height/2;
ctx.translate(radius,radius);
radius=radius*.9;

function drawClock(){
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle="#26e500";
	ctx.fill();
}

drawClock()