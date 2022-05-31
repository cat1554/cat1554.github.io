var c;
var ctx;
var dpr;
var ratio;
var dimensions;
var originalWidth;
var originalHeight;
var xmlobj;

var pan_x = -1100;
var pan_y = 1;
var pan_z = 0;

var imageScale = 8;

/*
var global_mouseLeaver = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});
*/

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

function mapRenderLine(x, z, clr){
	ctx.beginPath();
	ctx.lineWidth = Math.max((pan_y * 16), 16);
	ctx.strokeStyle = clr;
	ctx.moveTo(
		( ((x.x + pan_x) * pan_y) + 2560),
		( ((x.z + pan_z) * pan_y) + 1920)
	);
	ctx.lineTo(
		( ((z.x + pan_x) * pan_y) + 2560),
		( ((z.z + pan_z) * pan_y) + 1920)
	);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = clr;
	ctx.arc(
		( ((x.x + pan_x) * pan_y) + 2560),
		( ((x.z + pan_z) * pan_y) + 1920),
		Math.max((pan_y * 8), 8),
		0,
		2 * Math.PI
	);
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = clr;
	ctx.arc(
		( ((z.x + pan_x) * pan_y) + 2560),
		( ((z.z + pan_z) * pan_y) + 1920),
		Math.max((pan_y * 8), 8),
		0,
		2 * Math.PI
	);
	ctx.fill();
}

function mapRenderStop(x, z, lne, lbl){
	ctx.beginPath();
	ctx.lineWidth = Math.max((pan_y * 16), 16);
	ctx.strokeStyle = "black";
	ctx.fillStyle = "white";
	ctx.arc(
		( ((x + pan_x) * pan_y) + 2560),
		( ((z + pan_z) * pan_y) + 1920), 
		(pan_y * 16),
		0,
		2 * Math.PI
	);
	ctx.fill(); 
	ctx.stroke(); 
}

function mapRenderStep(){
	ctx.clearRect(0, 0, 5120, 3840)
;
	for (let lineLoop = 0; lineLoop < xmlobj.lines.length; lineLoop++) {
		for (let lineRenderLoop = 0; lineRenderLoop < (xmlobj.lines[lineLoop].points.length - 1); lineRenderLoop++) {
			mapRenderLine(xmlobj.lines[lineLoop].points[lineRenderLoop], xmlobj.lines[lineLoop].points[lineRenderLoop + 1], xmlobj.lines[lineLoop].colour);
		}
	}

	for (let lineLoop = 0; lineLoop < xmlobj.stops.length; lineLoop++) {
		mapRenderStop(xmlobj.stops[lineLoop].x, xmlobj.stops[lineLoop].z, xmlobj.stops[lineLoop].lines, xmlobj.stops[lineLoop].label);
	}
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj);
	xmlobj = myObj;

	setInterval(mapRenderStep, 500);
};

function initPage(){
	c = document.getElementById("train_map");
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

	dpr = imageScale;

  	c.width = dimensions.width * dpr;
  	c.height = dimensions.height * dpr;

	ratio = Math.min(
    		c.clientWidth / originalWidth,
		c.clientHeight / originalHeight
  	);

	xmlhttp.open("GET", "asset/game/mc/metro/systempoints.json");
	xmlhttp.send();
}