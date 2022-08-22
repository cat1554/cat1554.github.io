var u1n = "";
var u1p = 0;
var u1t = 0;

function pleaseExist() {
	if (document.getElementById("sv_state").innerHTML == "Online") {
		document.getElementById("sv_state").style.color = "#0FF";
	} else if (document.getElementById("sv_state").innerHTML == "Loading") {
		document.getElementById("sv_state").style.color = "#555";
	} else if (document.getElementById("sv_state").innerHTML == "Restarting") {
		document.getElementById("sv_state").style.color = "#FF0";
	} else {
		document.getElementById("sv_state").style.color = "#F00";
	}

	if (document.getElementById("sv_players_c").innerHTML == "8") {
		document.getElementById("sv_players_c").style.color = "#F00";
		document.getElementById("sv_players_o").style.color = "#F00";
		document.getElementById("sv_players_m").style.color = "#F00";
		document.getElementById("sv_players_p").style.color = "#F00";
		document.getElementById("sv_players_g").style.right = "0%";

	} else if (document.getElementById("sv_players_c").innerHTML == "7") {
		document.getElementById("sv_players_c").style.color = "#F50";
		document.getElementById("sv_players_o").style.color = "#F50";
		document.getElementById("sv_players_m").style.color = "#F50";
		document.getElementById("sv_players_p").style.color = "#F50";
		document.getElementById("sv_players_g").style.right = "12.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "6") {
		document.getElementById("sv_players_c").style.color = "#F90";
		document.getElementById("sv_players_o").style.color = "#F90";
		document.getElementById("sv_players_m").style.color = "#F90";
		document.getElementById("sv_players_p").style.color = "#F90";
		document.getElementById("sv_players_g").style.right = "25%";

	} else if (document.getElementById("sv_players_c").innerHTML == "5") {
		document.getElementById("sv_players_c").style.color = "#FF0";
		document.getElementById("sv_players_o").style.color = "#FF0";
		document.getElementById("sv_players_m").style.color = "#FF0";
		document.getElementById("sv_players_p").style.color = "#FF0";
		document.getElementById("sv_players_g").style.right = "37.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "4") {
		document.getElementById("sv_players_c").style.color = "#9F5";
		document.getElementById("sv_players_o").style.color = "#9F5";
		document.getElementById("sv_players_m").style.color = "#9F5";
		document.getElementById("sv_players_p").style.color = "#9F5";
		document.getElementById("sv_players_g").style.right = "50%";

	} else if (document.getElementById("sv_players_c").innerHTML == "3") {
		document.getElementById("sv_players_c").style.color = "#5F9";
		document.getElementById("sv_players_o").style.color = "#5F9";
		document.getElementById("sv_players_m").style.color = "#5F9";
		document.getElementById("sv_players_p").style.color = "#5F9";
		document.getElementById("sv_players_g").style.right = "62.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "2") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.right = "75%";

	} else if (document.getElementById("sv_players_c").innerHTML == "1") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.right = "87.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "0") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.right = "100%";

	} else {
		document.getElementById("sv_players_c").style.color = "#555";
		document.getElementById("sv_players_o").style.color = "#555";
		document.getElementById("sv_players_m").style.color = "#555";
		document.getElementById("sv_players_p").style.color = "#555";
		document.getElementById("sv_players_g").style.right = "100%";
	}

}

function initPage2() {
	setInterval(pleaseExist, 1000);
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	var svrxml = JSON.parse(this.responseText);
	
	window.console.debug(svrxml);
};
xmlhttp.onerror = function() {
	window.console.exception(" X X \n     \n XXX \nX   X\nFailed to load the server status.\nLoading cannot continue.\nTHIS IS NORMAL BEHAVIOUR IF THIS FILE IS LOADED LOCALLY.");
};

function initPage() {
	
	setTimeout(initPage2, 100);


	xmlhttp.open("GET", "./../../../asset/game/mc/status/stat.json");
	xmlhttp.send();
}