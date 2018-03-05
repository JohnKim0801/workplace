var colors =generateRandomColors(6);
var h1= document.querySelector("h1");
var resetbtn= document.querySelector("#reset")

var squares = document.querySelectorAll(".square");
// var squares = document.getElemnetsByClassName="square"; //다른방법
var pickedColor =pickcolor();
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent =pickedColor;
resetbtn.addEventListener("click",function(){
colors=generateRandomColors(6);
pickedColor=pickcolor();
colorDisplay.textContent=pickedColor;
for(var i =0; i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
});


for(var i =0; i<colors.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickcolor =this.style.backgroundColor;

		if(clickcolor===pickedColor){
			message.textContent="Correct!";
			changeColor(clickcolor);
			h1.style.backgroundColor=clickcolor;
		}
		else{
			this.style.backgroundColor="#232323";

			messageDisplay.textContent="Try Again!"}
		});
}

function changeColor(color){
	for(var i =0; i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){  //랜덤한 칼러를 골라준다.
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){

	var arr =[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}