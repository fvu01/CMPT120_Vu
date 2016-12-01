// Frances Vu
// tictactoe.js
// CMPT 120 Project 4, November 30, 2016

function changeplayer() {
	var player = document.getElementById("currentplayer").innerHTML;
	
	var click1 = document.getElementById("click1");
	var click2 = document.getElementById("click2");

	if(player == "X") {
		document.getElementById("currentplayer").innerHTML = "O";
		click1.play();
	}
	else {
		document.getElementById("currentplayer").innerHTML = "X";
		click2.play();
	}
} 

function set(idvalue) {
	var buttonclicked = document.getElementById(idvalue);
	var bclicked = document.getElementById("bclicked");
	
	if(buttonclicked.innerHTML == "" || buttonclicked.innerHTML == null) {
		var player = document.getElementById("currentplayer").innerHTML;
		buttonclicked.innerHTML = player;
		check_win();
	}
	else {
		bclicked.play();
		alert("This button has already been clicked!");
		bclicked.play();
	}
}

function check_win() {
	var player = document.getElementById("currentplayer").innerHTML;
	var win1 = document.getElementById("win1");
	
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
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b4 == b5 && b5 == b6 && b5 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b7 == b8 && b8 == b9 && b8 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b1 == b4 && b4 == b7 && b4 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b2 == b5 && b5 == b8 && b5 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b3 == b6 && b6 == b9 && b6 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b1 == b5 && b5 == b9 && b5 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else if(b3 == b5 && b5 == b7 && b5 == player) {
		win1.play();
		setTimeout(function(){alert("Player " + player + " Wins!");}, 4050);
	}
	else {
		changeplayer();
	}
}

function resets() {
	var buttons	= ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
	var reset1 = document.getElementById("reset1");
	
	for(var i = 0; i < buttons.length; i++ ) {
		var currentbutton = document.getElementById(buttons[i]);
		currentbutton.innerHTML = "";
		reset1.play();
		
		var currentplayer = document.getElementById("currentplayer");
		currentplayer.innerHTML = "X"
	}
}













