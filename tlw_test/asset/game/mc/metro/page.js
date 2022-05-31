var c;
var ctx;
var dpr;
var ratio;
var dimensions;
var originalWidth;
var originalHeight;
var xmlobj;

var pan_x = -1100;
var pan_y = 4;
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
//	window.console.log(x.x, x.z, z.x, z.z, clr);
	ctx.beginPath();
	ctx.lineWidth = Math.max((pan_y * 16), 16);
	ctx.strokeStyle = clr;
	ctx.moveTo(
		(0 + 2560),
		(0 + 1920)
	);
	ctx.lineTo(
		((z.x + pan_x) * pan_y),
		((z.z + pan_z) * pan_y)
	);
	ctx.stroke();
}

function mapRenderStep(){
	for (let lineLoop = 0; lineLoop < xmlobj.lines.length; lineLoop++) {
		for (let lineRenderLoop = 0; lineRenderLoop < (xmlobj.lines[lineLoop].points.length - 1); lineRenderLoop++) {
			mapRenderLine(xmlobj.lines[lineLoop].points[lineRenderLoop], xmlobj.lines[lineLoop].points[lineRenderLoop + 1], xmlobj.lines[lineLoop].colour);
		}
	}

/*	clockable = new Date();

	ctx.beginPath();
	ctx.arc((75 * clockScaleMultiplier), (75 * clockScaleMultiplier), (52 * clockScaleMultiplier), 0, (2 * Math.PI));
	ctx.fillStyle = "black";
	ctx.fill();

	clockable_secval = clockable.getSeconds() + (clockable.getMilliseconds() / 1000);

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

	if ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)) < 15.5) {
		ctx.fillStyle="#FFFFFF0" + ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)).toString(16));
	} else {
		ctx.fillStyle="#FFFFFF" + ((Math.round(((Math.sin((clockable_secval * 2) * Math.PI) + 1) / 2) * 255)).toString(16));
	}
	ctx.fillText(":  :", ((c.width/2)), ((c.height/2) + (6 * clockScaleMultiplier))); */
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj);
	xmlobj = myObj;

	setInterval(mapRenderStep, 50);
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