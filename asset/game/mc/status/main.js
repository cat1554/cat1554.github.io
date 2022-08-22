var svrxml;
var elm_a;
var new_a;
var p1n = "";
var p2n = "";
var p3n = "";
var p4n = "";
var p5n = "";
var p6n = "";
var p7n = "";
var p8n = "";
var flipping = 0;
var loop = 0;

function updatePlayer(num, icn, usr, rnk, pla, plb) {
	if (flipping == 0) {
		document.getElementById("sv_u" + num + "r").innerHTML = rnk;
		document.getElementById("sv_u" + num + "p").innerHTML = pla;
		document.getElementById("sv_u" + num + "t").innerHTML = plb;
	}
}

function flipPlayer2(num, icn, usr, rnk, pla, plb) {
	document.getElementById("sv_u" + num + "n").innerHTML = usr;
	document.getElementById("sv_u" + num + "r").innerHTML = rnk;
	document.getElementById("sv_u" + num + "p").innerHTML = pla;
	document.getElementById("sv_u" + num + "t").innerHTML = plb;
	document.getElementById("sv_u" + num + "f").src = icn;

	elm_a = document.getElementById("svc_usr" + num);
	elm_a.style.animation = "userflip2 100ms ease-in 0s 1 normal both";

	new_a = elm_a.cloneNode(true);
	elm_a.parentNode.replaceChild(new_a, elm_a);

	flipping = 0;
}

function flipPlayer(num, icn, usr, rnk, pla, plb) {
	if (flipping == 0) {
		flipping = 1;

		elm_a = document.getElementById("svc_usr" + num);
		elm_a.style.animation = "userflip1 100ms ease-in 0s 1 normal both";

		new_a = elm_a.cloneNode(true);
		elm_a.parentNode.replaceChild(new_a, elm_a);

		setTimeout(flipPlayer2, 100, num, icn, usr, rnk, pla, plb);
	}
}

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
		document.getElementById("sv_players_g").style.left = "0%";

	} else if (document.getElementById("sv_players_c").innerHTML == "7") {
		document.getElementById("sv_players_c").style.color = "#F50";
		document.getElementById("sv_players_o").style.color = "#F50";
		document.getElementById("sv_players_m").style.color = "#F50";
		document.getElementById("sv_players_p").style.color = "#F50";
		document.getElementById("sv_players_g").style.left = "-12.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "6") {
		document.getElementById("sv_players_c").style.color = "#F90";
		document.getElementById("sv_players_o").style.color = "#F90";
		document.getElementById("sv_players_m").style.color = "#F90";
		document.getElementById("sv_players_p").style.color = "#F90";
		document.getElementById("sv_players_g").style.left = "-25%";

	} else if (document.getElementById("sv_players_c").innerHTML == "5") {
		document.getElementById("sv_players_c").style.color = "#FF0";
		document.getElementById("sv_players_o").style.color = "#FF0";
		document.getElementById("sv_players_m").style.color = "#FF0";
		document.getElementById("sv_players_p").style.color = "#FF0";
		document.getElementById("sv_players_g").style.left = "-37.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "4") {
		document.getElementById("sv_players_c").style.color = "#9F5";
		document.getElementById("sv_players_o").style.color = "#9F5";
		document.getElementById("sv_players_m").style.color = "#9F5";
		document.getElementById("sv_players_p").style.color = "#9F5";
		document.getElementById("sv_players_g").style.left = "-50%";

	} else if (document.getElementById("sv_players_c").innerHTML == "3") {
		document.getElementById("sv_players_c").style.color = "#5F9";
		document.getElementById("sv_players_o").style.color = "#5F9";
		document.getElementById("sv_players_m").style.color = "#5F9";
		document.getElementById("sv_players_p").style.color = "#5F9";
		document.getElementById("sv_players_g").style.left = "-62.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "2") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.left = "-75%";

	} else if (document.getElementById("sv_players_c").innerHTML == "1") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.left = "-87.5%";

	} else if (document.getElementById("sv_players_c").innerHTML == "0") {
		document.getElementById("sv_players_c").style.color = "#0FF";
		document.getElementById("sv_players_o").style.color = "#0FF";
		document.getElementById("sv_players_m").style.color = "#0FF";
		document.getElementById("sv_players_p").style.color = "#0FF";
		document.getElementById("sv_players_g").style.left = "-100%";

	} else {
		document.getElementById("sv_players_c").style.color = "#555";
		document.getElementById("sv_players_o").style.color = "#555";
		document.getElementById("sv_players_m").style.color = "#555";
		document.getElementById("sv_players_p").style.color = "#555";
		document.getElementById("sv_players_g").style.left = "-100%";
	}

	loop++;

	if (loop > 31.5) {
		loop = 0;

		xmlhttp.open("GET", "/asset/game/mc/status/stat.json");
		xmlhttp.send();
	}
}

function initPage2() {
	setInterval(pleaseExist, 50);
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	svrxml = JSON.parse(this.responseText);
	
	window.console.debug(svrxml);

	for (let i = 0; i < 7; i++) {
		if (("p" + (i + 1) + "n") !== svrxml.players[i].name) {
			flipPlayer((i + 1), "/asset/game/mc/status/placeholder.png", svrxml.players[i].name, svrxml.players[i].rank, svrxml.players[i].ontime, svrxml.players[i].total);
		} else {
			updatePlayer((i + 1), "/asset/game/mc/status/placeholder.png", svrxml.players[i].name, svrxml.players[i].rank, svrxml.players[i].ontime, svrxml.players[i].total);
		}
	}
};
xmlhttp.onerror = function() {
	window.console.exception(" X X \n     \n XXX \nX   X\nFailed to load the server status.\nLoading cannot continue.\nTHIS IS NORMAL BEHAVIOUR IF THIS FILE IS LOADED LOCALLY.");
};

function initPage() {
	setTimeout(initPage2, 100);

	xmlhttp.open("GET", "/asset/game/mc/status/stat.json");
	xmlhttp.send();
}