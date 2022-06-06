var debugMode = "on";

var c;
var ctx;

var dpr;
var what2;

var clearLoops;
var clearType = 0;

var scene = 0;

var screenTimer = 6560;
var transitionTimer = 0;

const clockScaleMultiplier = 4;

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

function fixBorder() {
	for (let c1 = 1; c1 < 64; c1++) {
		ctx.clearRect(0, 0, c1, (64 - Math.sqrt(4096 - Math.pow((c1 - 64), 2))));
	}
	for (let c2 = 1; c2 < 64; c2++) {
		ctx.clearRect(((640*4) - c2), 0, c2, (64 - Math.sqrt(4096 - Math.pow((c2 - 64), 2))));
	}
	for (let c3 = 1; c3 < 64; c3++) {
		ctx.clearRect(0, ((480*4) - (64 - Math.sqrt(4096 - Math.pow((c3 - 64), 2)))), c3, (64 - Math.sqrt(4096 - Math.pow((c3 - 64), 2))));
	}
	for (let c4 = 1; c4 < 64; c4++) {
		ctx.clearRect(((640*4) - c4), ((480*4) - (64 - Math.sqrt(4096 - Math.pow((c4 - 64), 2)))), c4, (64 - Math.sqrt(4096 - Math.pow((c4 - 64), 2))));
	}
}

function debugText(){
	if (debugMode == "on") {
		document.getElementById("debug_text1").innerHTML = document.getElementById("music").currentTime;
		document.getElementById("debug_text3").innerHTML = scene;
	}
}

function setBlock(what){
	what2 = (what % 300);
	ctx.fillRect(((what2 % 20) * 128), (Math.floor(what2 / 20) * 128), 128, 128);
	fixBorder();
}

function setBlockLogo(){
	setBlock(88);
	setBlock(91);
	setBlock(133);
	setBlock(126);

	setBlock(129);
	setBlock(130);

	setBlock(148);
	setBlock(149);
	setBlock(150);
	setBlock(151);

	setBlock(167);
	setBlock(168);
	setBlock(169);
	setBlock(170);
	setBlock(171);
	setBlock(172);

	setBlock(188);
	setBlock(189);
	setBlock(190);
	setBlock(191);
}

function returnHome2() {
	if (window.location.hostname == /10\.0\.0\.\d{1,3}/) {
		window.location.href = "../../"
	} else if (window.location.hostname == /\bfile:\/\/\/\B/) {
		window.location.href = "../../index.html"
	} else {
		window.location.href = "http://www.totallylegitwebsite.online"
	}
}

function returnHome1() {
	document.getElementById("backHomeText").style.opacity = "1";
	document.getElementById("sel").play();
	setTimeout(returnHome2, 1000);
}

function musicOut() {
	if (document.getElementById("music").volume > 0) {
		if ((document.getElementById("music").volume - 0.05) > 0) {
			document.getElementById("music").volume = (document.getElementById("music").volume - 0.05);
		} else {
			document.getElementById("music").volume = (0);
		}
		setTimeout(musicOut, 50);
	} else {
		setTimeout(returnHome1, 2000);
	}
}

function returnHome() {
	setTimeout(musicOut, 50);
}

function transition(minTime) {
	document.getElementById("debug_text2").innerHTML = minTime;
	if (minTime != undefined) {
		if (debugMode == "on") {
			document.getElementById("debug_text2").innerHTML = minTime;
		}
		if (document.getElementById("music").currentTime >= minTime) {
			document.getElementById("debug_text2").style.color = "#0FF";
if (clearLoops < 300) {
			switch(clearType) {
				case 0:
					ctx.fillRect(0, 0, 2560, 1920);
					fixBorder();
					clearLoops = 300;
					break;
				case 1:
					if (((clearLoops / 15) % 2) < 1) {
						// Down
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 15));
					} else {
						// Up
						setBlock(Math.floor(clearLoops / 15) + (280 - ((clearLoops * 20) % 300)));
					}
					break;
				case 2:
					setBlock(clearLoops);
					break;
				case 3:
					if (((clearLoops / 15) % 2) < 1) {
						// Right
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 15));
					} else {
						// Left
						setBlock(300 - (((clearLoops * 20) % 300) + Math.floor(clearLoops / 15)));
					}
					break;
				case 4:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock(clearLoops);
					} else {
						// Left
						setBlock((280 - (Math.floor(clearLoops / 20) * 20) + (19 - (clearLoops % 20))));
					}
					break;
				case 5:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock((clearLoops % 20) + (Math.floor(clearLoops / 40) * 20));
					} else {
						// Left
						setBlock(299 - ((clearLoops % 20) + (Math.floor(clearLoops / 40) * 20)));
					}
					break;
				case 6:
					if (((clearLoops / 15) % 2) < 1) {
						// Right
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 30));
					} else {
						// Left
						setBlock(300 - (((clearLoops * 20) % 300) + Math.floor((clearLoops + 30) / 30)));
					}
					break;
				default:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock(clearLoops);
					} else {
						// Left
						setBlock((Math.floor(clearLoops / 20) * 20) + (19 - (clearLoops % 20)));
					}
			}
			clearLoops++;
			if ((clearLoops % 3) == 2) {
				setTimeout(transition, 15, minTime);
			} else {
				transition(minTime);
			}
		} else {
			scene++;
			title();
		}
		} else {
//			if (debugMode == "on") {
				document.getElementById("debug_text2").innerHTML = minTime;
//			}
			document.getElementById("debug_text2").style.color = "#F00";
			setTimeout(transition, 15, minTime);
		}
	} else {
//		if (debugMode == "on") {
			document.getElementById("debug_text2").innerHTML = 0;
//		}
		if (clearLoops < 300) {
			switch(clearType) {
				case 0:
					ctx.fillRect(0, 0, 2560, 1920);
					fixBorder();
					clearLoops = 300;
					break;
				case 1:
					if (((clearLoops / 15) % 2) < 1) {
						// Down
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 15));
					} else {
						// Up
						setBlock(Math.floor(clearLoops / 15) + (280 - ((clearLoops * 20) % 300)));
					}
					break;
				case 2:
					setBlock(clearLoops);
					break;
				case 3:
					if (((clearLoops / 15) % 2) < 1) {
						// Right
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 15));
					} else {
						// Left
						setBlock(300 - (((clearLoops * 20) % 300) + Math.floor(clearLoops / 15)));
					}
					break;
				case 4:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock(clearLoops);
					} else {
						// Left
						setBlock((280 - (Math.floor(clearLoops / 20) * 20) + (19 - (clearLoops % 20))));
					}
					break;
				case 5:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock((clearLoops % 20) + (Math.floor(clearLoops / 40) * 20));
					} else {
						// Left
						setBlock(299 - ((clearLoops % 20) + (Math.floor(clearLoops / 40) * 20)));
					}
					break;
				case 6:
					if (((clearLoops / 15) % 2) < 1) {
						// Right
						setBlock(((clearLoops * 20) % 300) + Math.floor(clearLoops / 30));
					} else {
						// Left
						setBlock(300 - (((clearLoops * 20) % 300) + Math.floor((clearLoops + 30) / 30)));
					}
					break;
				default:
					if (((clearLoops / 20) % 2) < 1) {
						// Right
						setBlock(clearLoops);
					} else {
						// Left
						setBlock((Math.floor(clearLoops / 20) * 20) + (19 - (clearLoops % 20)));
					}
			}
			clearLoops++;
			if ((clearLoops % 3) == 2) {
				setTimeout(transition, 15);
			} else {
				transition();
			}
		} else {
			scene++;
			title();
		}
	}
	fixBorder();
}

function title() {
	clearLoops = 0;
	switch(scene) {
		case 1:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("CAT1554", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#F80";
			setTimeout(transition, 100);
			break;
		case 2:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("CAT1554", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#F80";
			setTimeout(transition, 100);
			break;
		case 3:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("CAT1554", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Hosting", ((c.width/2) + 1000), ((c.height/2) - 300));
			ctx.fillText("Head design", ((c.width/2) + 1000), ((c.height/2) - 100));
			ctx.fillText("Main code", ((c.width/2) + 1000), ((c.height/2) + 100));
			ctx.fillText("Support", ((c.width/2) + 1000), ((c.height/2) + 300));
			ctx.fillText("Testing", ((c.width/2) + 1000), ((c.height/2) + 500));

			clearType = 2;
			ctx.fillStyle="#00F";
			setTimeout(transition, screenTimer);
			break;


		case 4:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFF5";
			ctx.textAlign = "right";
			ctx.fillText("Atlasim", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#00F";
			setTimeout(transition, 100);
			break;
		case 5:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFFA";
			ctx.textAlign = "right";
			ctx.fillText("Atlasim", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#00F";
			setTimeout(transition, 100);
			break;
		case 6:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFF";
			ctx.textAlign = "right";
			ctx.fillText("Atlasim", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Design", ((c.width/2) + 1000), ((c.height/2) - 300));
			ctx.fillText("Support", ((c.width/2) + 1000), ((c.height/2) - 100));
			ctx.fillText("Testing", ((c.width/2) + 1000), ((c.height/2) + 100));

			clearType = 3;
			ctx.fillStyle="#808";
			setTimeout(transition, screenTimer);
			break;


		case 7:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("Fantastic Trains", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#808";
			setTimeout(transition, 100);
			break;
		case 8:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("Fantastic Trains", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#808";
			setTimeout(transition, 100);
			break;
		case 9:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Fantastic Trains", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Testing", ((c.width/2) + 1000), ((c.height/2) - 300));
			ctx.fillText("Pawkin page design", ((c.width/2) + 1000), ((c.height/2) - 100));

			clearType = 4;
			ctx.fillStyle="#FF0";
			setTimeout(transition, screenTimer);
			break;


		case 10:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("Soy Messenger", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#FF0";
			setTimeout(transition, 100);
			break;
		case 11:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("Soy Messenger", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#FF0";
			setTimeout(transition, 100);
			break;
		case 12:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Soy Messenger", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Testing", ((c.width/2) + 1000), ((c.height/2) - 300));

			clearType = 5;
			ctx.fillStyle="#88F";
			setTimeout(transition, screenTimer);
			break;


		case 13:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("Space Cat", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#88F";
			setTimeout(transition, 100);
			break;
		case 14:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("Space Cat", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#88F";
			setTimeout(transition, 100);
			break;
		case 15:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Space Cat", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Testing", ((c.width/2) + 1000), ((c.height/2) - 300));

			clearType = 6;
			ctx.fillStyle="#AAA";
			setTimeout(transition, screenTimer);
			break;


		case 16:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 17:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 18:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("Legacy site users", ((c.width/2) + 1000), ((c.height/2) - 300));
			ctx.fillText("Misc testers", ((c.width/2) + 1000), ((c.height/2) - 100));
			ctx.fillText("Minecraft server users", ((c.width/2) + 1000), ((c.height/2) + 100));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, screenTimer);
			break;


		case 19:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 20:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 21:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("YouTube subscribers", ((c.width/2) + 1000), ((c.height/2) - 300));
			ctx.fillText("Twitter followers", ((c.width/2) + 1000), ((c.height/2) - 100));
			ctx.fillText("Current site users", ((c.width/2) + 1000), ((c.height/2) + 100));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, screenTimer);
			break;


		case 22:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 23:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 24:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillText("MDN Web Docs", ((c.width/2) + 1000), ((c.height/2) - 300));

			ctx.fillStyle="#F00";
			ctx.fillText("You", ((c.width/2) + 1000), ((c.height/2) + 100));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, screenTimer);
			break;


		case 25:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000A";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 26:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#0005";
			ctx.textAlign = "right";
			ctx.fillText("Special Thanks", ((c.width/2) + 1000), ((c.height/2) - 600));

			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 27:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#000";
			ctx.textAlign = "right";

			clearType = 0;
			ctx.fillStyle="#888";
			setTimeout(transition, 100);
			break;


		case 28:
			clearType = 0;
			ctx.fillStyle="#444";
			setTimeout(transition, 100);
			break;
		case 29:
			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;


		case 30:
			clearType = 0;
			ctx.fillStyle="#222";
			setTimeout(transition, 100, 85.5);
			break;
		case 31:
			clearType = 0;
			ctx.fillStyle="#333";
			setTimeout(transition, 100);
			break;
		case 32:
			clearType = 0;
			ctx.fillStyle="#444";
			setTimeout(transition, 100);
			break;
		case 33:
			clearType = 0;
			ctx.fillStyle="#555";
			setTimeout(transition, 100);
			break;
		case 34:
			clearType = 0;
			ctx.fillStyle="#666";
			setTimeout(transition, 100);
			break;
		case 35:
			clearType = 0;
			ctx.fillStyle="#777";
			setTimeout(transition, 100);
			break;
		case 36:
			clearType = 0;
			ctx.fillStyle="#888";
			setTimeout(transition, 100);
			break;
		case 37:
			clearType = 0;
			ctx.fillStyle="#999";
			setTimeout(transition, 100);
			break;
		case 38:
			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 39:
			clearType = 0;
			ctx.fillStyle="#BBB";
			setTimeout(transition, 100);
			break;
		case 40:
			clearType = 0;
			ctx.fillStyle="#CCC";
			setTimeout(transition, 100);
			break;
		case 41:
			clearType = 0;
			ctx.fillStyle="#DDD";
			setTimeout(transition, 100);
			break;
		case 42:
			clearType = 0;
			ctx.fillStyle="#EEE";
			setTimeout(transition, 100);
			break;
		case 43:
			clearType = 0;
			ctx.fillStyle="#FFF";
			setTimeout(transition, 100);
			break;
		case 44:
			clearType = 0;
			ctx.fillStyle="#EEE";
			window.console.log("AAA");
			setTimeout(transition, 100, 92.5);
			break;
		case 45:
			clearType = 0;
			ctx.fillStyle="#DDD";
			setTimeout(transition, 100);
			break;
		case 46:
			clearType = 0;
			ctx.fillStyle="#CCC";
			setTimeout(transition, 100);
			break;
		case 47:
			clearType = 0;
			ctx.fillStyle="#BBB";
			setTimeout(transition, 100);
			break;
		case 48:
			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case 49:
			clearType = 0;
			ctx.fillStyle="#999";
			setTimeout(transition, 100);
			break;
		case 50:
			clearType = 0;
			ctx.fillStyle="#888";
			setTimeout(transition, 100);
			break;
		case 51:
			clearType = 0;
			ctx.fillStyle="#777";
			setTimeout(transition, 100);
			break;
		case 52:
			clearType = 0;
			ctx.fillStyle="#666";
			setTimeout(transition, 100);
			break;
		case 53:
			clearType = 0;
			ctx.fillStyle="#555";
			setTimeout(transition, 100);
			break;
		case 54:
			clearType = 0;
			ctx.fillStyle="#444";
			setTimeout(transition, 100);
			break;
		case 55:
			clearType = 0;
			ctx.fillStyle="#333";
			setTimeout(transition, 100);
			break;
		case 56:
			clearType = 0;
			ctx.fillStyle="#222";
			setTimeout(transition, 100);
			break;
		case 57:
			clearType = 0;
			ctx.fillStyle="#111";
			setTimeout(transition, 100);
			break;
		case 58:
			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;


		case 59:

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 500);
			break;
		case 60:
			ctx.fillStyle="#555";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 61:
			ctx.fillStyle="#AAA";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 62:
			ctx.fillStyle="#FFF";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 2000);
			break;
		case 63:
			ctx.fillStyle="#AAA";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 64:
			ctx.fillStyle="#555";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 65:
			ctx.fillStyle="#000";
			setBlockLogo();

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 500);
			break;

		case 66:
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFF5";
			ctx.textAlign = "center";
			ctx.fillText("Pawkin Technologies, 2022", ((c.width/2)), ((c.height/2)));

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 67:
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFFA";
			ctx.textAlign = "center";
			ctx.fillText("Pawkin Technologies, 2022", ((c.width/2)), ((c.height/2)));

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 68:
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFF";
			ctx.textAlign = "center";
			ctx.fillText("Pawkin Technologies, 2022", ((c.width/2)), ((c.height/2)));

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 2000);
			break;
		case 69:
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFFA";
			ctx.textAlign = "center";
			ctx.fillText("Pawkin Technologies, 2022", ((c.width/2)), ((c.height/2)));

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 70:
			ctx.font = "900 " + (30 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FFF5";
			ctx.textAlign = "center";
			ctx.fillText("Pawkin Technologies, 2022", ((c.width/2)), ((c.height/2)));

			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 100);
			break;
		case 71:
			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 2000);
			break;

		case 72:
			returnHome();
			break;


		case -1:
			clearType = 0;
			ctx.fillStyle="#FFF";
			setTimeout(transition, 100);
			break;
		case -2:
			clearType = 0;
			ctx.fillStyle="#AAA";
			setTimeout(transition, 100);
			break;
		case -3:
			clearType = 0;
			ctx.fillStyle="#888";
			setTimeout(transition, 100);
			break;
		case -4:
			clearType = 0;
			ctx.fillStyle="#555";
			setTimeout(transition, 100);
			break;
		case -5:
			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 1000);
			break;
		case -6:
			clearType = 0;
			ctx.fillStyle="#000";
			setTimeout(transition, 10);
			break;

		default:
			ctx.font = "900 " + (45 * clockScaleMultiplier) + "px monospace";
			ctx.fillStyle="#FA0";
			ctx.textAlign = "center";
			ctx.fillText("totallylegitwebsite", ((c.width/2)), ((c.height/2) + (6 * clockScaleMultiplier)));

			clearType = 1;
			ctx.fillStyle="#F80";
			setTimeout(transition, 5000, 6);
	}
}

function haoreuchSetup2() {
	c = document.getElementById("anim_canvas");
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
	scene = -6;
	ctx.fillStyle="#000";
	ctx.fillRect(0, 0, 2560, 1920);
	fixBorder();
	c.style.opacity = "1";
	document.getElementById("music").addEventListener("play", title);
	document.getElementById("music").play();
}

function a() {
	document.getElementById("playText").style.display = "none";
	document.body.style.cursor = "none";
	document.body.requestFullscreen();

	setInterval(debugText, 10);

	setTimeout(haoreuchSetup2, 1000);
}