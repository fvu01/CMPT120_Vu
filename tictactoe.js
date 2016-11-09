// Frances Vu
// tictactoe.js
// CMPT 120 Project 2, November 9, 2016

function changeplayer() {
	var player = document.getElementById("currentplayer").innerHTML;
	
	if(player == "X") {
		document.getElementById("currentplayer").innerHTML = "O";
	}
	else {
		document.getElementById("currentplayer").innerHTML = "X";
	}
}

function set(b1) {
	var buttonclicked = document.getElementById("b1");
	var player = document.getElementById("currentplayer");
	buttonclicked.innerHTML = player.innerHTML;
	changeplayer();
	
	if(buttonclicked.innerHTML == "" || buttonclicked.innerHTML == null) {
		var player = document.getElementById("currentplayer");
		buttonclicked.innerHTML = player.innerHTML;
		changeplayer();
	}
	else if(buttonclicked.innerHTML == "X"){
		alert("This button has already been clicked!");
	}
	else if(buttonclicked.innerHTML == "O"){
		alert("This button has already been clicked!");
	}
}

































