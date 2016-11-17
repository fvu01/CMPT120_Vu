// Frances Vu
// tictactoe.js
// CMPT 120 Project 3, November 16, 2016

function changeplayer() {
	var player = document.getElementById("currentplayer").innerHTML;
	
	if(player == "X") {
		document.getElementById("currentplayer").innerHTML = "O";
	}
	else {
		document.getElementById("currentplayer").innerHTML = "X";
	}
} 

function set(idvalue) {
	var buttonclicked = document.getElementById(idvalue);
	
	if(buttonclicked.innerHTML == "" || buttonclicked.innerHTML == null) {
		var player = document.getElementById("currentplayer").innerHTML;
		buttonclicked.innerHTML = player;
		check_win();
	}
	else {
		alert("This button has already been clicked!");
	}
}

function check_win() {
	var player = document.getElementById("currentplayer").innerHTML;
	
	var b1 = document.getElementById("b1").innerHTML;
	var b2 = document.getElementById("b2").innerHTML;
	var b3 = document.getElementById("b3").innerHTML;
	
	var b4 = document.getElementById("b4").innerHTML;
	var b5 = document.getElementById("b5").innerHTML;
	var b6 = document.getElementById("b6").innerHTML;
	
	var b7 = document.getElementById("b7").innerHTML;
	var b8 = document.getElementById("b8").innerHTML;
	var b9 = document.getElementById("b9").innerHTML;
	
	if(b1 == b2 && b2 == b3 && b2 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b4 == b5 && b5 == b6 && b5 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b7 == b8 && b8 == b9 && b8 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b1 == b4 && b4 == b7 && b4 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b2 == b5 && b5 == b8 && b5 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b3 == b6 && b6 == b9 && b6 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b1 == b5 && b5 == b9 && b5 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b3 == b5 && b5 == b7 && b5 == player) {
		alert("Player " + player + " Wins!");
	}
	else {
		changeplayer();
	}
}
















