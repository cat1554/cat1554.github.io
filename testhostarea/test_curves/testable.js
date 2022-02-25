// JavaScript Document

var c;
var ctx;

var dpr;

var clockable = new Date();

var clockable_secval;

var topbarhour = "00" //clockable.getHours();
var topbarminute = "00" //clockable.getMinutes();
var topbarsecond = "00" //clockable.getSeconds();

var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var temp4 = 0;
var temp5 = 0;
var temp6 = 0;
var temp1 = 0;
var temp8 = 0;
var temp9 = 0;
var tempA = 0;
var tempB = 0;
var tempC = 0;
var tempD = 0;
var tempE = 0;
var tempF = 0;
var tempCalcA = 0;
var tempCalcB = 0;
var tempCalcC = 0;
var tempCalcD = 0;
var tempCalcE = 0;
var tempCalcF = 0;
var tempCalcG = 0;
var tempCalcH = 0;
var tempCalcI = 0;
var tempCalcJ = 0;
var tempCalcK = 0;
var tempCalcL = 0;
var tempCalcM = 0;
var tempCalcN = 0;
var tempCalcO = 0;
var tempCalcP = 0;
var tempCalcQ = 0;
var tempCalcR = 0;
var tempCalcS = 0;
var tempCalcT = 0;
var tempCalcU = 0;
var tempCalcV = 0;
var tempCalcW = 0;
var tempCalcX = 0;
var tempCalcY = 0;
var tempCalcZ = 0;

var curveSize;
var curveRes;
var curveType;

var curveStartX;
var curveStartY;
var curveStartZ;
var curveMidX;
var curveMidY;
var curveMidZ;
var curveEndX;
var curveEndY;
var curveEndZ;

var t;
var tt;

const clockScaleMultiplier = 5;

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
	curveSize = document.getElementById("siz").value;
	document.getElementById("sizlbl").innerHTML = "Size: " + curveSize;
	if (curveSize < 99.5) {
		document.getElementById("sizlbl").innerHTML = "Size: 0" + curveSize;
	}

	curveRes = document.getElementById("res").value;
	document.getElementById("reslbl").innerHTML = "Resolution: " + curveRes;
	if (curveRes < 9.5) {
		document.getElementById("reslbl").innerHTML = "Resolution: 0" + curveRes;
	}

	curveType = document.getElementById("typ").value;
	document.getElementById("typlbl").innerHTML = "Colour mode: on&nbsp;";
	document.getElementById("typ").className = "slider slider_on";
	if (curveType < 1.5) {
		document.getElementById("typ").className = "slider slider_off";
		document.getElementById("typlbl").innerHTML = "Colour mode: off";
	}

	curveStartX = 0;
	curveStartY = 0;
	curveStartZ = 0;
	curveMidX = (parseInt(curveSize) - (parseInt(curveSize) / 8));
	curveMidY = ((parseInt(curveSize) / 8) - parseInt(curveSize));
	curveMidZ = 0;
	curveEndX = parseInt(curveSize);
	curveEndY = parseInt(curveSize);
	curveEndZ = parseInt(curveSize);

	clockable = new Date();

	ctx.clearRect(0,0,(512 * clockScaleMultiplier),(512 * clockScaleMultiplier));
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.fillStyle = "#F00";
	ctx.arcTo((curveSize * clockScaleMultiplier), 0, (curveSize * clockScaleMultiplier), (curveSize * clockScaleMultiplier), (curveSize * clockScaleMultiplier));
	ctx.strokeStyle = "#000";
	ctx.lineWidth = (5 * clockScaleMultiplier);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "#0000FF88";
	ctx.arcTo((curveSize * clockScaleMultiplier), 0, (curveSize * clockScaleMultiplier), (curveSize * clockScaleMultiplier), (curveSize * clockScaleMultiplier));
	ctx.lineTo((curveSize * clockScaleMultiplier), 0);
	ctx.fill();

	for (let i = 0; i < (parseInt(curveRes)); i++) {
		t = ((i) / (parseInt(curveRes)));
		tt = ((i + 1) / (parseInt(curveRes)));

		tempCalcA = (1 - t);
		tempCalcB = (1 - tt);

		temp1 = ((tempCalcA * curveStartX) + (tempCalcA * t * curveMidX) + (tempCalcA * curveEndX));
		temp2 = ((tempCalcA * curveStartY) + (tempCalcA * t * curveMidY) + (tempCalcA * curveEndY));

		temp3 = ((tempCalcB * curveStartX) + (tempCalcB * tt * curveMidX) + (tempCalcB * curveEndX));
		temp4 = ((tempCalcB * curveStartY) + (tempCalcB * tt * curveMidY) + (tempCalcB * curveEndY));

		ctx.beginPath();
		if (curveType == "2") {
			ctx.strokeStyle = "#FFFFFF00";
		} else {
			ctx.strokeStyle = "#000000FF";
		}

		ctx.moveTo((temp1 * clockScaleMultiplier), (temp2 * clockScaleMultiplier));
		ctx.lineTo((temp3 * clockScaleMultiplier), (temp4 * clockScaleMultiplier));

		ctx.lineWidth = (7 * clockScaleMultiplier);
		ctx.stroke();

		ctx.beginPath();
		if (curveType == "2") {
			switch(i % 6) {
				case 0:
					ctx.strokeStyle = "#FF0000A0";
					break;
				case 1:
					ctx.strokeStyle = "#FFFF00A0";
					break;
				case 2:
					ctx.strokeStyle = "#00FF00A0";
					break;
				case 3:
					ctx.strokeStyle = "#00FFFFA0";
					break;
				case 4:
					ctx.strokeStyle = "#0000FFA0";
					break;
				case 5:
					ctx.strokeStyle = "#FF00FFA0";
					break;
				default:
					ctx.strokeStyle = "#8800FFFF";
			}
		} else {
			ctx.strokeStyle = "#8800FFFF";
		}

		ctx.moveTo((temp1 * clockScaleMultiplier), (temp2 * clockScaleMultiplier));
		ctx.lineTo((temp3 * clockScaleMultiplier), (temp4 * clockScaleMultiplier));

		ctx.lineWidth = (5 * clockScaleMultiplier);
		ctx.stroke();
	} 

//	ctx.beginPath();
//	ctx.strokeStyle = "#FF000088";
//	ctx.moveTo(0, 0);
//	ctx.lineTo((temp1 * clockScaleMultiplier), (temp2 * clockScaleMultiplier));
//	ctx.lineWidth = (5 * clockScaleMultiplier);
//	ctx.stroke();
//	ctx.arc((temp1 * clockScaleMultiplier), (temp2 * clockScaleMultiplier), (4 * clockScaleMultiplier), 0, 2 * Math.PI);
//	ctx.fillStyle = "#FF000088";
//	ctx.fill(); 
}

function haoreuchSetup2() {
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

	document.getElementById("siz").value = document.getElementById("siz").defaultValue
	document.getElementById("res").value = document.getElementById("res").defaultValue
	document.getElementById("typ").value = document.getElementById("typ").defaultValue

	setInterval(haoreuch, 50);
}
function haoreuchSetup() {
	setTimeout(haoreuchSetup2, 10);
}
