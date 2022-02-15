// JavaScript Document

var showtime = 1;
var mainclockable = new Date();
var topbaryear = mainclockable.getFullYear();
var topbarmonth = mainclockable.getMonth();
var topbarday = mainclockable.getDate();
var topbarhour = mainclockable.getHours();
var topbarminute = mainclockable.getMinutes();
var topbarsecond = mainclockable.getSeconds();
var dragger_mouse_new_x = 0;
var dragger_mouse_new_y = 0;
var dragger_mouse_old_x = 0;
var dragger_mouse_old_y = 0;

var mousex = 0;
var mousey = 0;

var mooooafafafafafa1 = "0px";
var mooooafafafafafa2 = "0px";
var mooooafafafafafa3 = 0;
var mooooafafafafafa4 = 0;
	
function timeCycle() {
	if (showtime == 0) {
		showtime = 1;
	} else {
		showtime = 0;
	}
}

function openTheFull() {
	document.getElementById('notMainContents').requestFullscreen();
}

function updateTimeClock() {
	if (document.fullscreenElement != null) {
		document.getElementById('notMainContents').style.position = "absolute";
		document.getElementById('notMainContents').style.width = "100%";
		document.getElementById('notMainContents').style.height = "100%";
		document.getElementById('notMainContents').style.top = "0px";
		document.getElementById('notMainContents').style.bottom = "0px";
		document.getElementById('notMainContents').style.left = "0px";
		document.getElementById('notMainContents').style.right = "0px";
	} else {
		document.getElementById('notMainContents').style.position = "relative";
		document.getElementById('notMainContents').style.width = "640px";
		document.getElementById('notMainContents').style.height = "480px";
		document.getElementById('notMainContents').style.top = "0px";
		document.getElementById('notMainContents').style.bottom = "0px";
		document.getElementById('notMainContents').style.left = "0px";
		document.getElementById('notMainContents').style.right = "0px";
	}
	mainclockable = new Date();
	topbaryear = ((mainclockable.getFullYear()) % 100);

	if ((mainclockable.getMonth() + 1) < 9.5) {
		topbarmonth = "0" + (mainclockable.getMonth() + 1);
	} else {
		topbarmonth = (mainclockable.getMonth() + 1);
	}

	if ((mainclockable.getDate()) < 9.5) {
		topbarday = "0" + mainclockable.getDate();
	} else {
		topbarday = mainclockable.getDate();
	}

	if ((mainclockable.getHours()) < 9.5) {
		topbarhour = "0" + mainclockable.getHours();
	} else {
		topbarhour = mainclockable.getHours();
	}

	if ((mainclockable.getMinutes()) < 9.5) {
		topbarminute = "0" + mainclockable.getMinutes();
	} else {
		topbarminute = mainclockable.getMinutes();
	}

	if ((mainclockable.getSeconds()) < 9.5) {
		topbarsecond = "0" + mainclockable.getSeconds();
	} else {
		topbarsecond = mainclockable.getSeconds();
	}

	if (showtime == 0) {
		document.getElementById("topbar_clock").innerHTML = topbarday + "/" + topbarmonth + "/" + topbaryear;
	} else {
		if ((topbarsecond % 2) == 1) {
			document.getElementById("topbar_clock").innerHTML = topbarhour + ":" + topbarminute + ":" + topbarsecond;
		} else {
			document.getElementById("topbar_clock").innerHTML = topbarhour + " " + topbarminute + " " + topbarsecond;
		}
	}

//	document.getElementById("mainNav").style.width = document.getElementById("windowframe").style.width;

//		document.getElementById("output1").innerHTML = dragger_mouse_old_x;
//		document.getElementById("output2").innerHTML = dragger_mouse_old_y;
//		document.getElementById("output3").innerHTML = dragger_mouse_new_x;
//		document.getElementById("output4").innerHTML = dragger_mouse_new_y;
	if (dragger_mouse_old_x != dragger_mouse_new_x || dragger_mouse_old_y != dragger_mouse_new_y) {
		dragger_mouse_old_x = dragger_mouse_new_x;
		dragger_mouse_old_y = dragger_mouse_new_y;
		document.getElementById("windowmovement").volume = 1;
		document.getElementById("windowmovementidle").volume = 0;
	} else {
		document.getElementById("windowmovement").volume = 0;
		document.getElementById("windowmovementidle").volume = 1;
	}

	mooooafafafafafa3 = document.getElementById("windowframe").clientWidth;
	mooooafafafafafa4 = document.getElementById("windowframe").clientHeight;
	document.getElementById("NetscapeNavigatorHeader").innerHTML = document.getElementById("mainNav").contentWindow.document.title;
	document.getElementById("mainNav").style.left = (mooooafafafafafa3 - 8);
	document.getElementById("mainNav").style.height = (mooooafafafafafa4 - 24);
}

function setup() {
	dragElement(document.getElementById("windowframeoutline"));
	setInterval(updateTimeClock, 50);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "grabber")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "grabber").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
		document.getElementById("windowmovement").loop = true;
		document.getElementById("windowmovement").play();
		document.getElementById("windowmovementidle").loop = true;
		document.getElementById("windowmovementidle").play();

	document.getElementById("windowframeoutline").style.zIndex = "4";
	document.getElementById("windowframeoutline").style.border = "2px dotted black";
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
	document.getElementById("windowframeoutline").style.zIndex = "";
	document.getElementById("windowframeoutline").style.border = "none";
	document.getElementById("windowframe").style.top = (elmnt.offsetTop - pos2) + "px";
	document.getElementById("windowframe").style.left = (elmnt.offsetLeft - pos1) + "px";

		document.getElementById("windowmovement").loop = false;
		document.getElementById("windowmovement").pause();
		document.getElementById("windowmovementidle").loop = false;
		document.getElementById("windowmovementidle").pause();
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function saveMousePos(event) {
	dragger_mouse_new_x = (Math.round(event.clientX) * 1);
	dragger_mouse_new_y = (Math.round(event.clientY) * 1);
}
