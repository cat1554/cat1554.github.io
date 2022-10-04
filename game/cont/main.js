var newitem;
var repitem;
var err_item_id = 0;

const errorlist = {
	"0": "Can't connect to the server.",
	"1": "You must allow access to your location to participate.",
	"2": "You must be in the continental United States to participate.",
	"3": "Your bumper has not expired.",
	"4": "To limit spam, you must wait 10 minutes.",
	"5": "The ball is too close to place your bumper.",
	"6": "Your bumper has not expired.",
	"7": "Your bumper has not expired."
}
const warninglist = {
	"0": "Can't connect to the server.",
	"1": "You must allow access to your location to participate."
}
const successlist = {
	"0": "Can't connect to the server.",
	"1": "You must allow access to your location to participate."
}

////////////////

function p_show_error(ecode) {
	err_item_id++;

	if (err_item_id > 63.5) {
		err_item_id = 0;
	}

	document.getElementById("p_eror_" + err_item_id).innerHTML = errorlist[String(ecode)];

	repitem = document.getElementById("p_eror_" + err_item_id);
	document.getElementById("p_eror_" + err_item_id).style.animation = "p_errormessage_slide 2s ease-out 0s 2 alternate both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	for (let i = 0; i < 63.5; i++) {
		document.getElementById("p_eror_" + ((i + err_item_id + 1) % 64)).style.zIndex = (512 + i);
	}
}

function p_show_warn(wcode) {
	wrn_item_id++;

	if (wrn_item_id > 63.5) {
		wrn_item_id = 0;
	}

	document.getElementById("p_warn_" + wrn_item_id).innerHTML = warninglist[String(wcode)];

	repitem = document.getElementById("p_warn_" + wrn_item_id);
	document.getElementById("p_warn_" + wrn_item_id).style.animation = "p_errormessage_slide 2s ease-out 0s 2 alternate both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	for (let i = 0; i < 63.5; i++) {
		document.getElementById("p_warn_" + ((i + wrn_item_id + 1) % 64)).style.zIndex = (512 + i);
	}
}

function p_show_warn(wcode) {
	wrn_item_id++;

	if (wrn_item_id > 63.5) {
		wrn_item_id = 0;
	}

	document.getElementById("p_warn_" + wrn_item_id).innerHTML = warninglist[String(wcode)];

	repitem = document.getElementById("p_warn_" + wrn_item_id);
	document.getElementById("p_warn_" + wrn_item_id).style.animation = "p_errormessage_slide 2s ease-out 0s 2 alternate both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	for (let i = 0; i < 63.5; i++) {
		document.getElementById("p_warn_" + ((i + wrn_item_id + 1) % 64)).style.zIndex = (512 + i);
	}
}

function p_show_load() {
	document.getElementById("p_load").innerHTML = "Waiting for the server...";

	repitem = document.getElementById("p_load");
	document.getElementById("p_load").style.animation = "p_errormessage_slide_fast 200ms ease-out 0s 1 alternate both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	document.getElementById("p_load").style.zIndex = 64;
}
function p_unshow_load() {
	document.getElementById("p_load").innerHTML = "Waiting for the server...";

	repitem = document.getElementById("p_load");
	document.getElementById("p_load").style.animation = "p_errormessage_slide_fast 100ms ease-out 0s 1 reverse both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	document.getElementById("p_load").style.zIndex = 64;
}
function p_slowunshow_load() {
	document.getElementById("p_load").innerHTML = "Waiting for the server...";

	repitem = document.getElementById("p_load");
	document.getElementById("p_load").style.animation = "p_errormessage_slide 2s ease-out 0s 1 reverse both running";
	newitem = repitem.cloneNode(true);
	document.getElementById("messagebox").replaceChild(newitem, repitem);

	document.getElementById("p_load").style.zIndex = 64;
}

////////////////

function bump() {
	navigator.geolocation.getCurrentPosition(yes, no, {enableHighAccuracy: true});
	window.console.log(cookie_get("bumpertime"));

	if (cookie_get("bumpertime") == null) {
		cookie_set("bumpertime",Date.now(),600);
	};

	const sendxmlhttp = new XMLHttpRequest();
/*	sendxmlhttp.onload = function() {
		
	};
	sendxmlhttp.onerror = function() {
		p_show_error(0);

		p_slowunshow_load();
	};
*/
	sendxmlhttp.open("POST", "json_demo.txt", true);
	sendxmlhttp.setRequestHeader("Content-type", "text/plain");
	sendxmlhttp.send("tornadoe");
}

function yes(inp) {
	window.console.log(inp);
	p_show_load();
}

function no(inp) {
	p_show_error(1);
}

function blar() {
	const xmlhttp = new XMLHttpRequest();
	xmlhttp.onload = function() {
		p_unshow_load();
		const myObj = JSON.parse(this.responseText);
		document.getElementById("demo").innerHTML = myObj.name;
	};
	xmlhttp.onerror = function() {
		p_show_error(0);

		p_slowunshow_load();
	};
	xmlhttp.open("GET", "json_demo.txt");
	xmlhttp.send();
}

function pageinit() {
	for (let i = 0; i < 63.5; i++) {
		newitem = document.getElementById("p_eror").cloneNode();
		newitem.id = "p_eror_" + i;
		newitem.className = "p_eror";
		document.getElementById("messagebox").appendChild(newitem);
	}
	for (let i = 0; i < 63.5; i++) {
		newitem = document.getElementById("p_warn").cloneNode();
		newitem.id = "p_warn_" + i;
		newitem.className = "p_warn";
		document.getElementById("messagebox").appendChild(newitem);
	}
	for (let i = 0; i < 7.5; i++) {
		newitem = document.getElementById("p_sucs").cloneNode();
		newitem.id = "p_sucs_" + i;
		newitem.className = "p_sucs";
		document.getElementById("messagebox").appendChild(newitem);
	}

	p_show_load();

	setTimeout(blar,500);
}