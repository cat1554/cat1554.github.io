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

var warningCreatorSys;
var warningCreatorSysInto;

var c;
var ctx;

var dpr;

var clockable = new Date();

var clockable_secval;

var my_gradient;
var my_gradient_fade = "FF";

var topbarhour = "00" //clockable.getHours();
var topbarminute = "00" //clockable.getMinutes();
var topbarsecond = "00" //clockable.getSeconds();

const clockScaleMultiplier = 20;



function getObjectFitSize(
	contains /* true = contain, false = cover */,
	containerWidth,
	containerHeight,
	width,
	height
) {
	var doRatio = width / height;
	var cRatio = containerWidth / containerHeight;
	var targetWidth = 0;
	var targetHeight = 0;
	var test = contains ? doRatio > cRatio : doRatio < cRatio;

	if (test) {
    		targetWidth = containerWidth;
    		targetHeight = targetWidth / doRatio;
  	} else {
    		targetHeight = containerHeight;
    		targetWidth = targetHeight * doRatio;
  	}

  	return {
    		width: targetWidth,
    		height: targetHeight,
    		x: (containerWidth - targetWidth) / 2,
    		y: (containerHeight - targetHeight) / 2
  	};
}

function haoreuch() {
	linkparam = location.search;

	paramfind = linkparam.indexOf("debug=1");

	if (paramfind != -1) {
		debugmode = 1;
	} else {
		debugmode = 0;
	}

	if (debugmode == 1) {
//		document.getElementById("output8").innerHTML = "08:" + linkparam;
//		document.getElementById("output9").innerHTML = "09:" + linkparam.indexOf("music=1");
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
//			document.getElementById("output0").innerHTML = "moooooablar2=" + moooooablar2;
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

	clockable = new Date();

	ctx.beginPath();
	ctx.arc((75 * clockScaleMultiplier), (75 * clockScaleMultiplier), (52 * clockScaleMultiplier), 0, (2 * Math.PI));
	ctx.fillStyle = "black";
	ctx.fill();

	clockable_secval = clockable.getSeconds() + (clockable.getMilliseconds() / 1000);

//	Math.round( (6 - clockable_secval) * 255)
	if ((Math.round( (6 - clockable_secval) * 255)) > 254.5) {
		my_gradient_fade = "FF";
	} else if ((Math.round( (6 - clockable_secval) * 255)) < 0.5) {
		my_gradient_fade = "00";
	} else if ((Math.round( (6 - clockable_secval) * 255)) < 15.5) {
		my_gradient_fade = "0" + ((Math.round( (6 - clockable_secval) * 255)).toString(16));
	} else {
		my_gradient_fade = ((Math.round( (6 - clockable_secval) * 255)).toString(16));
	}

	ctx.beginPath();
	ctx.arc((75 * clockScaleMultiplier), (75 * clockScaleMultiplier), (50 * clockScaleMultiplier), 0, (2 * Math.PI));

	my_gradient = ctx.createLinearGradient(((-100 + (clockable.getMilliseconds() / 10)) * clockScaleMultiplier), ((-75 + (clockable.getMilliseconds() / 10)) * clockScaleMultiplier), ((100 + (clockable.getMilliseconds() / 10)) * clockScaleMultiplier), ((125 + (clockable.getMilliseconds() / 10)) * clockScaleMultiplier));
	my_gradient.addColorStop(0, "#FF0000" + my_gradient_fade);
	my_gradient.addColorStop((1/24), "#FFFF00" + my_gradient_fade);
	my_gradient.addColorStop((2/24), "#00FF00" + my_gradient_fade);
	my_gradient.addColorStop((3/24), "#00FFFF" + my_gradient_fade);
	my_gradient.addColorStop((4/24), "#0000FF" + my_gradient_fade);
	my_gradient.addColorStop((5/24), "#FF00FF" + my_gradient_fade);
	my_gradient.addColorStop((6/24), "#FF0000" + my_gradient_fade);
	my_gradient.addColorStop((7/24), "#FFFF00" + my_gradient_fade);
	my_gradient.addColorStop((8/24), "#00FF00" + my_gradient_fade);
	my_gradient.addColorStop((9/24), "#00FFFF" + my_gradient_fade);
	my_gradient.addColorStop((10/24), "#0000FF" + my_gradient_fade);
	my_gradient.addColorStop((11/24), "#FF00FF" + my_gradient_fade);
	my_gradient.addColorStop((12/24), "#FF0000" + my_gradient_fade);

	my_gradient.addColorStop((13/24), "#FFFF00" + my_gradient_fade);
	my_gradient.addColorStop((14/24), "#00FF00" + my_gradient_fade);
	my_gradient.addColorStop((15/24), "#00FFFF" + my_gradient_fade);
	my_gradient.addColorStop((16/24), "#0000FF" + my_gradient_fade);
	my_gradient.addColorStop((17/24), "#FF00FF" + my_gradient_fade);
	my_gradient.addColorStop((18/24), "#FF0000" + my_gradient_fade);
	my_gradient.addColorStop((19/24), "#FFFF00" + my_gradient_fade);
	my_gradient.addColorStop((20/24), "#00FF00" + my_gradient_fade);
	my_gradient.addColorStop((21/24), "#00FFFF" + my_gradient_fade);
	my_gradient.addColorStop((22/24), "#0000FF" + my_gradient_fade);
	my_gradient.addColorStop((23/24), "#FF00FF" + my_gradient_fade);
	my_gradient.addColorStop(1, "#FF0000" + my_gradient_fade);

	ctx.fillStyle = my_gradient;
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#FFA500FF";
	ctx.arc((75 * clockScaleMultiplier), (75 * clockScaleMultiplier), (50 * clockScaleMultiplier), (-0.5 * Math.PI), (((clockable_secval / 30) - 0.5) * Math.PI));
	ctx.lineTo((75 * clockScaleMultiplier), (75 * clockScaleMultiplier));
	ctx.fill();

	ctx.beginPath();
	if(clockable_secval > 0.5) {
		ctx.fillStyle = "#FFA50000";
	} else {
		if((255 - (Math.round(clockable_secval * 510))) >= 16) {
			ctx.fillStyle = "#FFA500" + (255 - (Math.round(clockable_secval * 510))).toString(16);
		} else {
			ctx.fillStyle = "#FFA5000" + (255 - (Math.round(clockable_secval * 510))).toString(16);
		}
	}
	ctx.arc((75 * clockScaleMultiplier), (75 * clockScaleMultiplier), (50 * clockScaleMultiplier), 0, (2 * Math.PI));
	ctx.lineTo((75 * clockScaleMultiplier), (75 * clockScaleMultiplier));
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#00000088";
	ctx.moveTo((40 * clockScaleMultiplier), (65 * clockScaleMultiplier));
	ctx.lineTo((100 * clockScaleMultiplier), (65 * clockScaleMultiplier));
	ctx.arcTo((120 * clockScaleMultiplier), (65 * clockScaleMultiplier), (120 * clockScaleMultiplier), (70 * clockScaleMultiplier), (10 * clockScaleMultiplier));
	ctx.lineTo((120 * clockScaleMultiplier), (80 * clockScaleMultiplier));
	ctx.arcTo((120 * clockScaleMultiplier), (85 * clockScaleMultiplier), (110 * clockScaleMultiplier), (85 * clockScaleMultiplier), (10 * clockScaleMultiplier));
	ctx.lineTo((40 * clockScaleMultiplier), (85 * clockScaleMultiplier));
	ctx.arcTo((30 * clockScaleMultiplier), (85 * clockScaleMultiplier), (30 * clockScaleMultiplier), (80 * clockScaleMultiplier), (10 * clockScaleMultiplier));
	ctx.lineTo((30 * clockScaleMultiplier), (70 * clockScaleMultiplier));
	ctx.arcTo((30 * clockScaleMultiplier), (65 * clockScaleMultiplier), (40 * clockScaleMultiplier), (65 * clockScaleMultiplier), (10 * clockScaleMultiplier));
	ctx.fill();

	if ((clockable.getHours() % 24) < 9.5) {
		topbarhour = "0" + (clockable.getHours() % 24);
	} else {
		topbarhour = (clockable.getHours() % 24);
	}
	if ((clockable.getMinutes()) < 9.5) {
		topbarminute = "0" + (clockable.getMinutes());
	} else {
		topbarminute = (clockable.getMinutes());
	}
	if ((clockable.getSeconds()) < 9.5) {
		topbarsecond = "0" + (clockable.getSeconds());
	} else {
		topbarsecond = (clockable.getSeconds());
	}

	ctx.font = "900 " + (15 * clockScaleMultiplier) + "px monospace";
	ctx.fillStyle="#FFF";
	ctx.textAlign = "center";
	ctx.fillText(topbarhour + " " + topbarminute + " " + topbarsecond, ((c.width/2)), ((c.height/2) + (6 * clockScaleMultiplier)));

//	window.console.log(((Math.sin(clockable_secval * Math.PI) + 1) / 2) * 255);
	if ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)) < 15.5) {
		ctx.fillStyle="#FFFFFF0" + ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)).toString(16));
	} else {
		ctx.fillStyle="#FFFFFF" + ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)).toString(16));
	}
//	ctx.fillStyle="#FFFFFF" + (.toString(16));
	ctx.fillText(":  :", ((c.width/2)), ((c.height/2) + (6 * clockScaleMultiplier)));

//	window.console.log((Math.round(clockable_secval * 200)).toString(16));
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

function taoeutnaoetuhntohneauTEST() {
	warningCreatorSys = document.createElement("div");
	warningCreatorSys.id = "schoolalertdetailsdiv";
	warningCreatorSysInto = document.getElementById("corntents");
	warningCreatorSysInto.insertBefore(warningCreatorSys, warningCreatorSysInto.children[0]);

	warningCreatorSys = document.createElement("table");
	warningCreatorSys.id = "schoolalertdetailstable";
	warningCreatorSys.style.width = "100%"
	warningCreatorSys.style.height = "20px"
	warningCreatorSysInto = document.getElementById("schoolalertdetailsdiv");
	warningCreatorSysInto.appendChild(warningCreatorSys);

	warningCreatorSys = document.createElement("tr");
	warningCreatorSys.id = "schoolalertdetailstr";
	warningCreatorSysInto = document.getElementById("schoolalertdetailstable");
	warningCreatorSysInto.appendChild(warningCreatorSys);

	warningCreatorSys = document.createElement("td");
	warningCreatorSys.id = "schoolalertdetailstextualicon";
	warningCreatorSysInto = document.getElementById("schoolalertdetailstr");
	warningCreatorSysInto.appendChild(warningCreatorSys);

	warningCreatorSys = document.createElement("img");
	warningCreatorSys.id = "schoolalertdetailstextualiconimg";
	warningCreatorSys.src = "asset/misc/oi_marker.png";
	warningCreatorSys.style.width = "20px";
	warningCreatorSys.style.height = "20px";
	warningCreatorSys.style.verticalAlign = "sub";
//	warningCreatorSys.innerHTML = "OI";
	warningCreatorSysInto = document.getElementById("schoolalertdetailstextualicon");
	warningCreatorSysInto.appendChild(warningCreatorSys);



	warningCreatorSys = document.createElement("td");
	warningCreatorSys.id = "schoolalertdetailstextualsum";
	warningCreatorSys.innerHTML = "These webpages were created for a school project.";
	warningCreatorSysInto = document.getElementById("schoolalertdetailstr");
	warningCreatorSysInto.appendChild(warningCreatorSys);

	warningCreatorSys = document.createElement("td");
	warningCreatorSys.id = "schoolalertdetailstextualoutgradient";
	warningCreatorSysInto = document.getElementById("schoolalertdetailstr");
	warningCreatorSysInto.appendChild(warningCreatorSys);



	warningCreatorSys = document.createElement("p");
	warningCreatorSys.id = "schoolalertdetailstextual";
	warningCreatorSys.innerHTML = "These webpages were created for a school project, and may be of low quality. Many Google Drive links are present, only viewable with a school email. While the public is free to explore the website, not all content is available.";
	warningCreatorSysInto = document.getElementById("schoolalertdetailsdiv");
	warningCreatorSysInto.appendChild(warningCreatorSys);

	
	//var textnode = document.createTextNode(text);
	//menuObj.appendChild(textnode);
//	elementThing = document.body;
//	elementThing.appendChild(menuObj);

//	document.getElementById("alertbar").innerHTML = "These webpages were created for a school-related project.";
}

function haoreuchSetup2() {
	taoeutnaoetuhntohneauTEST();

	c = document.getElementById("canvas_clock");
	ctx = c.getContext("2d");

	originalHeight = c.height;
	originalWidth = c.width;

	dimensions = getObjectFitSize(
    		true,
    		c.clientWidth,
    		c.clientHeight,
    		c.width,
    		c.height
  	);

//	dpr = (window.devicePixelRatio * clockScaleMultiplier) || clockScaleMultiplier;
	dpr = clockScaleMultiplier;

  	c.width = dimensions.width * dpr;
  	c.height = dimensions.height * dpr;

	ratio = Math.min(
    		c.clientWidth / originalWidth,
		c.clientHeight / originalHeight
  	);

//	ctx.scale(ratio, ratio);

	setInterval(haoreuch, 10);
}

function haoreuchSetup() {
	setTimeout(haoreuchSetup2, 10);
}

function saveMousePos(event) {
	mousey = (event.clientY);
	mousex = (event.clientX);
}

//document.addEventListener('contextmenu', event => event.preventDefault());
