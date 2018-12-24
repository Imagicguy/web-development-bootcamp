var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var target = document.querySelector("#target");
var reset = document.querySelector("#reset");
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var newTarget = document.querySelector("input");
var isOver = false;
var score1 = 0;
var score2 = 0;
button1.addEventListener("click",function(){
	if(!isOver){
		score1++;
		if (score1 == target.textContent){
			display1.style.color = "green";
			isOver = true;
			
		}
		display1.textContent = score1;

	}
});

button2.addEventListener("click",function(){
	if(!isOver){
		score2++;
		if (score2 == target.textContent){
			display2.style.color = "green";
			isOver = true;
			
		}
		display2.textContent = score2;

	}
});

reset.addEventListener("click",function(){
	reseting();
});

function reseting(){
	score1 = 0;
	score2 = 0;
	display1.textContent = 0;
	display2.textContent = 0;
	display1.style.color = "black";
	display2.style.color = "black";
	isOver = false;
}
newTarget.addEventListener("change",function(){
	target.textContent = newTarget.value;
	reseting();
});
