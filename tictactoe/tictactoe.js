var turn="X";
var gridArray;
var done=false;

function play() {
	var idName="'"+event.target.id+"'";
	if (turn=="X") {
		//alert(event.target.innerHTML);
		if(event.target.innerHTML==""){
			event.target.innerHTML="X";
			won();
			turn="O";
			if(!done){
				document.getElementById("who").innerHTML="O's Turn";
			}
		}
	}
	else{
		if(event.target.innerHTML==""){
			event.target.innerHTML="O";
			won();
			turn="X";
			if(!done){
				document.getElementById("who").innerHTML="X's Turn";
			}
		}
	}
}

function won()
{
	gridArray=document.getElementsByClassName("grid-item");

	if ((gridArray[0].innerHTML==gridArray[1].innerHTML) && (gridArray[1].innerHTML==gridArray[2].innerHTML) && (gridArray[0].innerHTML!="")) 
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[3].innerHTML==gridArray[4].innerHTML) && (gridArray[4].innerHTML==gridArray[5].innerHTML) && (gridArray[3].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;

	}
	else if((gridArray[6].innerHTML==gridArray[7].innerHTML) && (gridArray[7].innerHTML==gridArray[8].innerHTML) && (gridArray[8].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[0].innerHTML==gridArray[4].innerHTML) && (gridArray[4].innerHTML==gridArray[8].innerHTML) && (gridArray[0].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[2].innerHTML==gridArray[4].innerHTML) && (gridArray[4].innerHTML==gridArray[6].innerHTML) && (gridArray[6].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[0].innerHTML==gridArray[3].innerHTML) && (gridArray[3].innerHTML==gridArray[6].innerHTML) && (gridArray[6].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[1].innerHTML==gridArray[4].innerHTML) && (gridArray[4].innerHTML==gridArray[7].innerHTML) && (gridArray[1].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[2].innerHTML==gridArray[5].innerHTML) && (gridArray[5].innerHTML==gridArray[8].innerHTML) && (gridArray[8].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU WIN! HOORAY HOORAY HOORAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ... !";
		done=true;
	}
	else if((gridArray[0].innerHTML!="") && (gridArray[1].innerHTML!="") && (gridArray[2].innerHTML!="") && (gridArray[3].innerHTML!="") && (gridArray[4].innerHTML!="") && (gridArray[5].innerHTML!="") && (gridArray[6].innerHTML!="") && (gridArray[7].innerHTML!="") && (gridArray[8].innerHTML!=""))
	{
		document.getElementById("win?!").innerHTML="YOU HAD A DRAW! YOU CAN PLAY AGAIN!";
		done=true;
	}
}

function reset(){
	gridArray[0].innerHTML="";
	gridArray[1].innerHTML="";
	gridArray[2].innerHTML="";
	gridArray[3].innerHTML="";
	gridArray[4].innerHTML="";
	gridArray[5].innerHTML="";
	gridArray[6].innerHTML="";
	gridArray[7].innerHTML="";
	gridArray[8].innerHTML="";
	turn="X";
	document.getElementById("who").innerHTML="X's Turn";
	document.getElementById("win?!").innerHTML="";
	done=false;
}