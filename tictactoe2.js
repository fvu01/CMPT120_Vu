// Frances Vu
// tictactoe2.js
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
	var b10 = document.getElementById("b10").innerHTML;
	
	var b11 = document.getElementById("b11").innerHTML;
	var b12 = document.getElementById("b12").innerHTML;
	var b13 = document.getElementById("b13").innerHTML;
	var b14 = document.getElementById("b14").innerHTML;
	var b15 = document.getElementById("b15").innerHTML;
	
	var b16 = document.getElementById("b16").innerHTML;
	var b17 = document.getElementById("b17").innerHTML;
	var b18 = document.getElementById("b18").innerHTML;
	var b19 = document.getElementById("b19").innerHTML;
	var b20 = document.getElementById("b20").innerHTML;
	
	var b21 = document.getElementById("b21").innerHTML;
	var b22 = document.getElementById("b22").innerHTML;
	var b23 = document.getElementById("b23").innerHTML;
	var b24 = document.getElementById("b24").innerHTML;
	var b25 = document.getElementById("b25").innerHTML;
	
	if(b1 == b2 && b2 == b3 && b3 == b4 && b4 == b5 && b3 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b6 == b7 && b7 == b8 && b8 == b9 && b9 == b10 && b8 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b11 == b12 && b12 == b13 && b13 == b14 && b14 == b15 && b13 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b16 == b17 && b17 == b18 && b18 == b19 && b19 == b20 && b18 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b21 == b22 && b22 == b23 && b23 == b24 && b24 == b25 && b23 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b1 == b6 && b6 == b11 && b11 == b16 && b16 == b21 && b11 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b2 == b7 && b7 == b12 && b12 == b17 && b17 == b22 && b12 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b3 == b8 && b8 == b13 && b13 == b18 && b18 == b23 && b13 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b4 == b9 && b9 == b14 && b14 == b19 && b19 == b24 && b14 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b5 == b10 && b10 == b15 && b15 == b20 && b20 == b25 && b15 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b1 == b7 && b7 == b13 && b13 == b19 && b19 == b25 && b13 == player) {
		alert("Player " + player + " Wins!");
	}
	else if(b5 == b9 && b9 == b13 && b13 == b17 && b17 == b20 && b13 == player) {
		alert("Player " + player + " Wins!");
	}
	else {
		changeplayer();
	}
}
















