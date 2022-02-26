// JavaScript Document

// https://javascript.info/bezier-curve#maths

var c;
var ctx;

var dpr;

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
var startX;
var startY;
var midX;
var midY;
var endX;
var endY;
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
	startX = document.getElementById("stx").value;
	document.getElementById("stxlbl").innerHTML = "Start X: " + startX;

	startY = document.getElementById("sty").value;
	document.getElementById("stylbl").innerHTML = "Start Y: " + startY;


	midX = document.getElementById("mdx").value;
	document.getElementById("mdxlbl").innerHTML = "Mid X: " + midX;

	midY = document.getElementById("mdy").value;
	document.getElementById("mdylbl").innerHTML = "Mid Y: " + midY;


	endX = document.getElementById("enx").value;
	document.getElementById("enxlbl").innerHTML = "End X: " + endX;

	endY = document.getElementById("eny").value;
	document.getElementById("enylbl").innerHTML = "End Y: " + endY;


	curveRes = document.getElementById("res").value;
	document.getElementById("reslbl").innerHTML = "Resolution: " + curveRes;


	curveType = document.getElementById("typ").value;
	document.getElementById("typlbl").innerHTML = "Colour mode: on";
	document.getElementById("typ").className = "slider slider_on";
	if (curveType < 1.5) {
		document.getElementById("typ").className = "slider slider_off";
		document.getElementById("typlbl").innerHTML = "Colour mode: off";
	}


	curveStartX = (parseInt(startX) + 256);
	curveStartY = (parseInt(startY) + 256);
	curveMidX = (parseInt(midX) + 256);
	curveMidY = (parseInt(midY) + 256);
	curveEndX = (parseInt(endX) + 256);
	curveEndY = (parseInt(endY) + 256);

	ctx.clearRect(0,0,(1024 * clockScaleMultiplier),(1024 * clockScaleMultiplier));

	ctx.beginPath();
	ctx.moveTo((curveStartX * clockScaleMultiplier), (curveStartY * clockScaleMultiplier));
	ctx.quadraticCurveTo((curveMidX * clockScaleMultiplier), (curveMidY * clockScaleMultiplier), (curveEndX * clockScaleMultiplier), (curveEndY * clockScaleMultiplier));
	ctx.strokeStyle = "#000";
	ctx.lineWidth = (5 * clockScaleMultiplier);
	ctx.stroke();


	ctx.beginPath();
	ctx.fillStyle = "#0000FF88";
	ctx.moveTo((curveStartX * clockScaleMultiplier), (curveStartY * clockScaleMultiplier));
	ctx.quadraticCurveTo((curveMidX * clockScaleMultiplier), (curveMidY * clockScaleMultiplier), (curveEndX * clockScaleMultiplier), (curveEndY * clockScaleMultiplier));
	ctx.lineTo((curveMidX * clockScaleMultiplier), (curveMidY * clockScaleMultiplier));
	ctx.fill();


	for (let i = 0; i < (parseInt(curveRes)); i++) {
		t = ((i) / (parseInt(curveRes)));
		tt = ((i + 1) / (parseInt(curveRes)));

		tempCalcA = (1 - t);
		tempCalcB = (1 - tt);

		temp1 = (((tempCalcA * tempCalcA) * curveStartX) + (2 * tempCalcA * t * curveMidX) + ((t * t) * curveEndX));
		temp2 = (((tempCalcA * tempCalcA) * curveStartY) + (2 * tempCalcA * t * curveMidY) + ((t * t) * curveEndY));

		temp3 = (((tempCalcB * tempCalcB) * curveStartX) + (2 * tempCalcB * tt * curveMidX) + ((tt * tt) * curveEndX));
		temp4 = (((tempCalcB * tempCalcB) * curveStartY) + (2 * tempCalcB * tt * curveMidY) + ((tt * tt) * curveEndY));


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

		ctx.moveTo(((temp1 * clockScaleMultiplier)), ((temp2 * clockScaleMultiplier)));

		ctx.lineTo(((temp3 * clockScaleMultiplier)), ((temp4 * clockScaleMultiplier)));

		ctx.lineWidth = (5 * clockScaleMultiplier);
		ctx.stroke();
	}
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

	document.getElementById("stx").value = document.getElementById("stx").defaultValue
	document.getElementById("sty").value = document.getElementById("sty").defaultValue
	document.getElementById("mdx").value = document.getElementById("mdx").defaultValue
	document.getElementById("mdy").value = document.getElementById("mdy").defaultValue
	document.getElementById("enx").value = document.getElementById("enx").defaultValue
	document.getElementById("eny").value = document.getElementById("eny").defaultValue

	document.getElementById("res").value = document.getElementById("res").defaultValue
	document.getElementById("typ").value = document.getElementById("typ").defaultValue

	setInterval(haoreuch, 50);
}
function haoreuchSetup() {
	setTimeout(haoreuchSetup2, 10);
}
