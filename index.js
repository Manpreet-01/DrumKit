// let curr = document.querySelectorAll(".drum").length;
// document.getElementById("console").innerHTML=curr;
// document.querySelector("button").addEventListener("click", getclickedmy);

// function getclickedmy(){
	// alert("i got clicked...");
// }

function makesound(curr){
	switch(curr){
			
		case "a":		var a = new Audio("sounds/tom-1.mp3");
					a.play();			break;
			
		case "s":		var s = new Audio("sounds/tom-2.mp3");
					s.play();			break;
			
		case "d":		var d = new Audio("sounds/tom-3.mp3");
					d.play();			break;
			
		case "f":		var f = new Audio("sounds/tom-4.mp3");
					f.play();			break;
		
		case "j":		var j = new Audio("sounds/snare.mp3");
					j.play();			break;
					
		case "k":		var k = new Audio("sounds/crash.mp3");
					k.play();			break;
					
		case "l":		var l = new Audio("sounds/kick-bass.mp3");
					l.play();			break;
		
		default :		break;
	}
}

for(let i=0; i<7; i++){
	document.querySelectorAll("button")[i].addEventListener("click", function (){
		let curr = this ;
		curr = curr.innerHTML;
		makesound(curr);		myanimation(curr);
	});
}

document.addEventListener("keypress", function (event){
	let curr = event.key ;
	makesound(curr);		myanimation(curr);	
});

function myanimation(curr){
	let actvbtn = document.querySelector("."+curr);
	actvbtn.classList.add("pressed");

	setTimeout(function(){
		actvbtn.classList.remove("pressed");
	}, 150);
	
}