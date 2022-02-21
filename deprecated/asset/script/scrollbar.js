// JavaScript Document

var eggs;
var eggz;
var eggzz;
var jaeoa;
var jaeob;

var scrlTop;
var windowHigh;
var contentHigh;
var barHigh;
var barHighB;
var scrollbarheld = 0;

var uphold = 0;
var dnhold = 0;

var mousex;
var mousey;
var mouseyA;
var mouseyB;
var mouseGrabX;
var mouseGrabY;
var mouseGrabYA;
var mouseGrabScrollString;
var mouseGrabScroll;
var mouseGrabScrollA;
var mouseGrabScrollB;
var mouseGrabScrollC;
var mouseGrabScrollBig;

var linkparam;
var paramfind;
var debugmode;

//var ctx = document.getElementById("canvas_object").getContext("2d");

//window.addEventListener('mousemove', function (e) {
//	myGameArea.x = e.pageX;
//	myGameArea.y = e.pageY;
//})

function haoreuch() {
	linkparam = location.search;

	paramfind = linkparam.indexOf("debug=1");

	if (paramfind != -1) {
		debugmode = 1;
	} else {
		debugmode = 0;
	}

	if (debugmode == 1) {
		document.getElementById("output8").innerHTML = "08:" + linkparam;
		document.getElementById("output9").innerHTML = "09:" + linkparam.indexOf("music=1");
	}

	windowHigh = window.innerHeight;
	contentHigh = document.getElementById("corntents").clientHeight;

	if (uphold == 1) {
		document.getElementById("contx").scrollTop = document.getElementById("contx").scrollTop - 8;
	}
	if (dnhold == 1) {
		document.getElementById("contx").scrollTop = document.getElementById("contx").scrollTop + 8;
	}

	if (document.getElementById("ContextNavMenu_procrast") != document.getElementById("ThisIsAReallyLongNameMeantToCatchPossibleErrorsAndShouldNotBeUsedAnywhereInTheHtml")) {
		if (document.getElementById("ContextNavMenu_procrast").style.display != "none") {
			document.getElementById("ContextNavMenu_Mainbutton").style.display = "inline";
		} else {
			document.getElementById("ContextNavMenu").style.top = (-500 - 5) + "px";
			document.getElementById("ContextNavMenu").style.left = (-500 - 5) + "px";
		}
	}

	eggs = (contentHigh - windowHigh);

	jaeoa = ((windowHigh / contentHigh) * 100);
	document.getElementById("jetrlojertlarje").style.bottom = (jaeoa) + "%";
	document.getElementById("etjetnmjtnmejtnmej").style.top = (jaeoa) + "%";

	barHigh = document.getElementById("jetrlojertlarje").clientHeight;
	barHighB = document.getElementById("jaojaojeoajaoj").clientHeight;
	document.getElementById("moocow_scroll").style.height = (barHighB - barHigh) + "px";

	scrlTop = document.getElementById("contx").scrollTop;

	eggz = (eggs - scrlTop);

	eggzz = ( ((scrlTop) / (eggs)) * 100);

	jaeob = eggzz;

	document.getElementById("contx").scrollLeft = 0;

	if (scrollbarheld == 1) {
		//mouseGrabScroll: percentage when grabbed
		mouseGrabYA = (((mouseGrabY - 20) / (barHigh)) * 100); //Percentage at grab point
		mouseyA = (((mousey - 20) / (barHigh)) * 100); //Percentage now
		var mouse_diff = ((mouseGrabScroll * 100) - mouseGrabYA); //Grab offset fix

		var mouse_moo = (mouseyA + mouse_diff); //Percentage change

		var mouse_blar = (mouseyA + mouse_diff); //Target percent
		
		var moooooablar1 = document.getElementById("moocow_scroll").style.top;
		var moooooablar2 = moooooablar1.replace("%","");

		if (debugmode == 1) {
			document.getElementById("output0").innerHTML = "moooooablar2=" + moooooablar2;
		}

		if (mousey != mouseyB) {
			mouseyB = mousey;
			document.getElementById("scrl").volume = 1;
		} else {
			document.getElementById("scrl").volume = 0;
		}

		if (mouse_blar > 100) {
			document.getElementById("moocow_scroll").style.top = (100) + "%";
			document.getElementById("upperScrollCover").style.bottom = (0) + "%";
			document.getElementById("lowerScrollCover").style.top = (100) + "%";
		} else if (mouse_blar < 0) {
			document.getElementById("moocow_scroll").style.top = (0) + "%";
			document.getElementById("upperScrollCover").style.bottom = (100) + "%";
			document.getElementById("lowerScrollCover").style.top = (0) + "%";
		} else {
			document.getElementById("moocow_scroll").style.top = (mouse_blar) + "%";
			document.getElementById("upperScrollCover").style.bottom = (100 - mouse_blar) + "%";
			document.getElementById("lowerScrollCover").style.top = (mouse_blar) + "%";
		}

		var new_totable = ((mouse_blar / 100) * (contentHigh - windowHigh)); //Target position

		document.getElementById("contx").scrollTop = new_totable;
//		document.getElementById("canvas_object").style.display = "initial";
	} else {
		document.getElementById("scrl").loop = false;
		document.getElementById("scrl").pause();
		document.getElementById("upperScrollCover").style.bottom = (100 - jaeob) + "%";
		document.getElementById("lowerScrollCover").style.top = (jaeob) + "%";
		document.getElementById("moocow_scroll").style.top = (jaeob) + "%";
//		document.getElementById("canvas_object").style.display = "none";
	}
}

function startuphold() {
	uphold = 1;
}
function enduphold() {
	uphold = 0;
}
function startdnhold() {
	dnhold = 1;
}
function enddnhold() {
	dnhold = 0;
}

function moooStartHold() {
	document.getElementById("scrl").loop = true;
	document.getElementById("scrl").play();
	mouseGrabX = mousex;
	mouseGrabY = mousey;
	mouseGrabScrollString = document.getElementById("moocow_scroll").style.top;
	mouseGrabScrollBig = mouseGrabScrollString.replace("%","");
	mouseGrabScroll = (mouseGrabScrollBig / 100);
	scrollbarheld = 1;
}

function moooEndHold() {
	scrollbarheld = 0;
}

function nopeNoRightClickyHere() {
	document.getElementById("prevent_inspect").style.display = "initial";
}

function openContextMenu(event) {
	document.getElementById("ContextNavMenu").style.top = (event.clientY - 5) + "px";
	document.getElementById("ContextNavMenu").style.left = (event.clientX - 5) + "px";
	openMenu("ContextNavMenu");
}

function saveMousePos(event) {
	mousey = (event.clientY);
	mousex = (event.clientX);
}

//document.addEventListener('contextmenu', event => event.preventDefault());
