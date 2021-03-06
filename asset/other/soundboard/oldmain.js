var targetX = 0;
var targetY = 0;
var audioSummonedID = 0;
var audioSummonerID = 0;

var detectdb = "0";

var elm;
var newone;

var counter = 0;

var notificationCache = [];
var notificationClock = 0;
var notificationStatus = 0;
var notificationCountStatus = 0;

var summonMode = 0;
var theme = 1;
var themeTransition = 0;
var currTheme = 1;

var fileSource;

const keymapping = [
	"`",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"[",
	"]",
	"Backspace",
	"Tab",
	"'",
	",",
	".",
	"p",
	"y",
	"f",
	"g",
	"c",
	"r",
	"l",
	"/",
	"=",
	"Slash",
	"Caps",
	"a",
	"o",
	"e",
	"u",
	"i",
	"d",
	"h",
	"t",
	"n",
	"s",
	"-",
	"Enter",
	"Shift",
	";",
	"q",
	"j",
	"k",
	"x",
	"b",
	"m",
	"w",
	"v",
	"z",
	"Shift",
	"Up",
	"Function",
	"Control",
	"Alt",
	"Meta",
	"Space",
	"Meta",
	"Alt",
	"Left",
	"Right",
	"Down"
];

var y1map = [
	"`",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"[",
	"]",
	"Backspace"
];

var y2map = [
	"Tab",
	"'",
	",",
	".",
	"p",
	"y",
	"f",
	"g",
	"c",
	"r",
	"l",
	"/",
	"=",
	"Slash"
];

var y3map = [
	"Caps",
	"a",
	"o",
	"e",
	"u",
	"i",
	"d",
	"h",
	"t",
	"n",
	"s",
	"-",
	"Enter"
];

var y4map = [
	"Shift",
	";",
	"q",
	"j",
	"k",
	"x",
	"b",
	"m",
	"w",
	"v",
	"z",
	"Shift"
];

var y5map = [
	"Function",
	"Control",
	"Alt",
	"Meta",
	"Space",
	"Meta",
	"Alt",
	"Up",
	"Down",
	"Left",
	"Right"
];

var lmDate = Date.parse(document.lastModified);
var lmmDate = new Date(lmDate);

var mnStrng = "";
var hrStrng = "";
var dyStrng = "";
var moStrng = "";
var yrStrng = "";



if (lmmDate.getMinutes() < 9.5) {
	mnStrng = "0" + lmmDate.getMinutes();
} else {
	mnStrng = lmmDate.getMinutes();
}

if (lmmDate.getHours() < 9.5) {
	hrStrng = "0" + lmmDate.getHours();
} else {
	hrStrng = lmmDate.getHours();
}

if (lmmDate.getDate() < 9.5) {
	dyStrng = "0" + lmmDate.getDate();
} else {
	dyStrng = lmmDate.getDate();
}

if (lmmDate.getMonth() < 8.5) {
	moStrng = "0" + (lmmDate.getMonth() + 1);
} else {
	moStrng = (lmmDate.getMonth() + 1);
}

yrStrng = lmmDate.getFullYear();

function scriptframecheck() {
	var laDate = Date.parse(document.getElementById("scriptiframe").contentDocument.lastModified);
	var laaDate = new Date(lmDate);
}

function summonAudio2(obj) {
	document.getElementById(obj).addEventListener("ended", function() {
		document.getElementById(obj).remove();
	});
}

function summonQuietAudio(assetSource) {
	var eightAudio = document.createElement("audio");
	audioSummonedID = String(audioSummonerID);
	eightAudio.volume = 0;
	eightAudio.id = audioSummonedID;
	eightAudio.className = "eightSilentAudioClass";
	audioSummonerID++;
	if (audioSummonerID > 511.5) {
		audioSummonerID = 0;
	}
	document.head.appendChild(eightAudio);
	summonAudio2(audioSummonedID);
	eightAudio.src = String(fileSource + assetSource + ".wav");
	eightAudio.play();
}

function summonAudio(assetSource) {
	audioCounter = document.getElementsByClassName("eightAudioClass");
	if (currTheme == 1 || audioCounter.length == 0) {
		var eightAudio = document.createElement("audio");
		audioSummonedID = String(audioSummonerID);
		eightAudio.id = audioSummonedID;
		eightAudio.className = "eightAudioClass";
		audioSummonerID++;
		if (audioSummonerID > 511.5) {
			audioSummonerID = 0;
		}
		document.head.appendChild(eightAudio);
		summonAudio2(audioSummonedID);
		eightAudio.src = String(fileSource + assetSource + ".wav");
		eightAudio.play();
	} else {
		var moocow222 = audioCounter.length;
		for (let moocow112 = 0; moocow112 < moocow222; moocow112++) {
			audioCounter[moocow112].remove();
		}

		var eightAudio = document.createElement("audio");
		audioSummonedID = String(audioSummonerID);
		eightAudio.id = audioSummonedID;
		eightAudio.className = "eightAudioClass";
		audioSummonerID++;
		if (audioSummonerID > 511.5) {
			audioSummonerID = 0;
		}
		document.head.appendChild(eightAudio);
		summonAudio2(audioSummonedID);
		eightAudio.src = String(fileSource + assetSource + ".wav");
		eightAudio.play();
	}
}

function summonSystemAudio(assetSource) {
		var eightAudio = document.createElement("audio");
		audioSummonedID = String(audioSummonerID);
		eightAudio.id = audioSummonedID;
		eightAudio.className = "eightSystemAudioClass";
		audioSummonerID++;
		if (audioSummonerID > 511.5) {
			audioSummonerID = 0;
		}
		document.head.appendChild(eightAudio);
		summonAudio2(audioSummonedID);
		eightAudio.src = String(fileSource + assetSource + ".wav");
		eightAudio.play();
}

function addToNotificationCache(inp) {
	notificationCache.push(inp);
}

function notificationBarHandler() {
	notificationCountStatus = 0;

	if (notificationCache.length > 0.5) {
		if (notificationClock > 10 || notificationStatus == 0) {
			if (notificationStatus == 0) {
				summonSystemAudio("sys_tritone");
				notificationStatus = 1;
				notificationClock = 0;
				document.getElementById("topnavbar_builtinnotificationone").innerHTML = document.getElementById("topnavbar_builtinnotificationtwo").innerHTML;
				document.getElementById("topnavbar_builtinnotificationone").className = "notificationText";
				document.getElementById("notification1").style.backgroundColor = "black";
				document.getElementById("notification1").className = "notificationAnim2";
				elm = document.getElementById("notification1");
				newone = elm.cloneNode(true);
				elm.parentNode.replaceChild(newone, elm);

				document.getElementById("topnavbar_builtinnotificationtwo").innerHTML = notificationCache[0];
				document.getElementById("topnavbar_builtinnotificationtwo").className = "notificationText";
				document.getElementById("notification2").style.backgroundColor = "grey";
				document.getElementById("notification2").className = "notificationAnim3";
				elm = document.getElementById("notification2");
				newone = elm.cloneNode(true);
				elm.parentNode.replaceChild(newone, elm);
				notificationCache.shift();
			} else {
				summonSystemAudio("sys_tritone");
				notificationStatus = 1;
				notificationClock = 0;
				document.getElementById("topnavbar_builtinnotificationone").innerHTML = document.getElementById("topnavbar_builtinnotificationtwo").innerHTML;
				document.getElementById("topnavbar_builtinnotificationone").className = "notificationText";
				document.getElementById("notification1").style.backgroundColor = "grey";
				document.getElementById("notification1").className = "notificationAnim4";
				elm = document.getElementById("notification1");
				newone = elm.cloneNode(true);
				elm.parentNode.replaceChild(newone, elm);

				document.getElementById("topnavbar_builtinnotificationtwo").innerHTML = notificationCache[0];
				document.getElementById("topnavbar_builtinnotificationtwo").className = "notificationText";
				document.getElementById("notification2").style.backgroundColor = "grey";
				document.getElementById("notification2").className = "notificationAnim3";
				elm = document.getElementById("notification2");
				newone = elm.cloneNode(true);
				elm.parentNode.replaceChild(newone, elm);
				notificationCache.shift();
			}
		}
	} else {
		if (notificationClock > 60 && notificationStatus == 1) {
			notificationStatus = 0;
			document.getElementById("topnavbar_builtinnotificationone").innerHTML = document.getElementById("topnavbar_builtinnotificationtwo").innerHTML;
			document.getElementById("topnavbar_builtinnotificationone").className = "notificationText";
			document.getElementById("notification1").style.backgroundColor = "grey";
			document.getElementById("notification1").className = "notificationAnim4";
			elm = document.getElementById("notification1");
			newone = elm.cloneNode(true);
			elm.parentNode.replaceChild(newone, elm);

			document.getElementById("topnavbar_builtinnotificationtwo").innerHTML = "tlw/other/soundboard/";
			document.getElementById("topnavbar_builtinnotificationtwo").className = "notificationText";
			document.getElementById("notification2").style.backgroundColor = "black";
			document.getElementById("notification2").className = "notificationAnim1";
			elm = document.getElementById("notification2");
			newone = elm.cloneNode(true);
			elm.parentNode.replaceChild(newone, elm);
			notificationCountStatus = 1;
		} else if (notificationStatus == 0) {
			notificationCountStatus = 1;
		}
	}

	document.getElementById("topnavbar_builtinnotificationcounterone").innerHTML = (notificationCache.length + 1);
	if (notificationCountStatus == 1) {
		document.getElementById("topnavbar_builtinnotificationcounterone").innerHTML = "";
		document.getElementById("topnavbar_builtinnotificationcounterone").style.display = "none";
	} else {
		document.getElementById("topnavbar_builtinnotificationcounterone").style.display = "initial";
	}
	document.getElementById("topnavbar_builtinnotificationcountertwo").innerHTML = notificationCache.length;
	if (notificationCache.length < 0.5) {
		document.getElementById("topnavbar_builtinnotificationcountertwo").innerHTML = "";
		document.getElementById("topnavbar_builtinnotificationcountertwo").style.display = "none";
	} else {
		document.getElementById("topnavbar_builtinnotificationcountertwo").style.display = "initial";
	}

	notificationClock++;
}

function addButton3(obj) {
	document.getElementById(obj).style.backgroundColor = "";
	document.getElementById(obj).style.transitionDuration = "";
}

function addButton2(obj, src, key, volume) {
	document.getElementById(obj).addEventListener("click", function(ratios) {
		if (ratios.getModifierState("Meta") == false) {
//			for (let leCounterable = 0; leCounterable < volume; leCounterable++) {
				summonAudio(src);
//			}
		}
	});
	document.body.addEventListener("keydown", function(ratios) {
		if (window.summonMode == 0) {
			if (ratios.getModifierState("Meta") == false) {
				if (ratios["key"] == key) {
					document.getElementById(obj).click();
					document.getElementById(obj).style.backgroundColor = "lightblue";
					document.getElementById(obj).style.transitionDuration = "0ms";
					setTimeout(addButton3, 100, obj);
				}
			}
		}
	});
	document.body.addEventListener("keyup", function(ratios) {
		if (window.summonMode == 1) {
			if (ratios.getModifierState("Meta") == false) {
				if (ratios["key"] == key) {
					document.getElementById(obj).click();
					document.getElementById(obj).style.backgroundColor = "lightblue";
					document.getElementById(obj).style.transitionDuration = "0ms";
					setTimeout(addButton3, 100, obj);
				}
			}
		}
	});
	summonQuietAudio(src);
}

function addSpecialButton3(obj) {
	document.getElementById(obj).style.backgroundColor = "";
	document.getElementById(obj).style.transitionDuration = "";
}

function addSpecialButton2(obj, src, key) {
	document.getElementById(obj).addEventListener("click", function(ratios) {
		if (ratios.getModifierState("Meta") == false) {
			switch(src) {
				case "HoldMode":
					if (summonMode == 1) {
						summonMode = 0;
						addToNotificationCache("Switched to KeyDown mode.");
					} else {
						summonMode = 1;
						addToNotificationCache("Switched to KeyUp mode.");
					}
					break;
				case "Overlap":
					if (currTheme == 0) {
						currTheme = 1;
						addToNotificationCache("Enabled overlap.");
					} else {
						currTheme = 0;
						addToNotificationCache("Disabled overlap.");
					}
					break;
				case "build":
					addToNotificationCache("Build " + hrStrng + mnStrng + "-" + moStrng + dyStrng + "-" + yrStrng);
					break;
				default:
					addToNotificationCache("Invalid action error.");
			}
		}
	});
	document.body.addEventListener("keydown", function(ratios) {
			if (ratios.getModifierState("Meta") == false) {
				if (ratios["key"] == key) {
					document.getElementById(obj).click();
					document.getElementById(obj).style.backgroundColor = "lightyellow";
					document.getElementById(obj).style.transitionDuration = "0ms";
					setTimeout(addSpecialButton3, 100, obj);
				}
			}
	});
}

function addLyingButton3(obj) {
	document.getElementById(obj).style.backgroundColor = "";
	document.getElementById(obj).style.transitionDuration = "";
}

function addLyingButton2(obj, key) {
	document.body.addEventListener("keydown", function(ratios) {
		if (window.summonMode == 0) {
			if ((ratios.getModifierState("Meta") == false) || (key == "Meta")) {
				if (ratios["key"] == key) {
					document.getElementById(obj).click();
					document.getElementById(obj).style.backgroundColor = "#FF9090";
					document.getElementById(obj).style.transitionDuration = "0ms";
					setTimeout(addLyingButton3, 100, obj);
				}
			}
		}
	});
	document.body.addEventListener("keyup", function(ratios) {
		if (window.summonMode == 1) {
			if ((ratios.getModifierState("Meta") == false) || (key == "Meta")) {
				if (ratios["key"] == key) {
					document.getElementById(obj).click();
					document.getElementById(obj).style.backgroundColor = "#FF9090";
					document.getElementById(obj).style.transitionDuration = "0ms";
					setTimeout(addLyingButton3, 100, obj);
				}
			}
		}
	});
}

function addButton(x,y,text,source,volume) {
	var key = String(window["y" + y + "map"][x - 1]);

	var createdButton = document.createElement("button");
	createdButton.className = "keyboardsound";
	createdButton.innerHTML = String(text);
	createdButton.id = "x" + String(x) + "y" + String(y) + "b";
	document.getElementById("x" + String(x) + "y" + String(y)).appendChild(createdButton);
	addButton2("x" + String(x) + "y" + String(y), String(source), key, (volume + 1));

	createdButton = document.createElement("p");
	createdButton.className = "keyboardbutton";
	createdButton.innerHTML = String(key);
	createdButton.id = "x" + String(x) + "y" + String(y) + "p";
	document.getElementById("x" + String(x) + "y" + String(y)).appendChild(createdButton);

	document.getElementById("x" + String(x) + "y" + String(y)).classList.add("sbtd");
	
}

function addSpecialButton(x,y,text,source) {
	var key = String(window["y" + y + "map"][x - 1]);

	var createdButton = document.createElement("button");
	createdButton.className = "keyboardsound";
	createdButton.innerHTML = String(text);
	createdButton.id = "x" + String(x) + "y" + String(y) + "b";
	document.getElementById("x" + String(x) + "y" + String(y)).appendChild(createdButton);
	addSpecialButton2("x" + String(x) + "y" + String(y), String(source), key);

	createdButton = document.createElement("p");
	createdButton.className = "keyboardbutton";
	createdButton.innerHTML = String(key);
	createdButton.id = "x" + String(x) + "y" + String(y) + "p";
	document.getElementById("x" + String(x) + "y" + String(y)).appendChild(createdButton);

	document.getElementById("x" + String(x) + "y" + String(y)).classList.add("sbtd");
	document.getElementById("x" + String(x) + "y" + String(y)).classList.add("sbtds");
	
}

function addCapsButton() {
	var key = String(window["y" + 3 + "map"][1 - 1]);

	var createdButton = document.createElement("button");
	createdButton.className = "keyboardsound";
	createdButton.innerHTML = String(text);
	createdButton.id = "x" + String(1) + "y" + String(3) + "b";
	document.getElementById("x" + String(1) + "y" + String(3)).appendChild(createdButton);
	addSpecialButton2("x" + String(1) + "y" + String(3), String(source), key);

	createdButton = document.createElement("p");
	createdButton.className = "keyboardbutton";
	createdButton.innerHTML = String(key);
	createdButton.id = "x" + String(1) + "y" + String(3) + "p";
	document.getElementById("x" + String(1) + "y" + String(3)).appendChild(createdButton);

	document.getElementById("x" + String(1) + "y" + String(3)).classList.add("sbtd");
	document.getElementById("x" + String(1) + "y" + String(3)).classList.add("sbtdc");
	
}

function addLyingButton(x,y) {
	var key = String(window["y" + y + "map"][x - 1]);


	var createdButton = document.createElement("p");
	createdButton.className = "keyboardbutton";
	createdButton.innerHTML = String(key);
	createdButton.id = "x" + String(x) + "y" + String(y) + "p";
	document.getElementById("x" + String(x) + "y" + String(y)).appendChild(createdButton);

	document.getElementById("x" + String(x) + "y" + String(y)).classList.add("dstd");
	addLyingButton2("x" + String(x) + "y" + String(y), key);
	
}

function setupSoundBoard() {
	if (window.location.protocol == "file:") {
		fileSource = "../../asset/other/soundboard/audio/";
	} else {
		if (window.location.hostname == "cat1554.github.io") {
			fileSource = "audio/";
		} else {
			fileSource = "../../asset/other/soundboard/audio/";
		}
	}

	fileSource = "audio/";

//	document.body.addEventListener("keydown", function(ratios) {
//		window.console.log(ratios["key"])
//	});

	addLyingButton(1,1);
	addButton(2,1,"Bruh","bruh",0);
	addButton(3,1,"Oof","oof",0);
	addButton(4,1,"No","no",0);
	addButton(5,1,"Whoopsie Doodle!","whoops",0);
	addButton(6,1,"Bao","bass",1);
	addButton(7,1,"Chord","chord",0);
	addButton(8,1,"Agh","agh",0);
	addButton(9,1,"*Cough*","cough",1);
	addButton(10,1,"Nice Try Mate","nicetry",0);
	addButton(11,1,"Frog","frog",1);
	addSpecialButton(12,1,"Toggle Trigger Mode","HoldMode");
	addSpecialButton(13,1,"Toggle Overlapping","Overlap");
	addLyingButton(14,1);

	addLyingButton(1,2);
	addLyingButton(2,2);
	addButton(3,2,"Laugh Track","warai",0);
	addButton(4,2,"*Cough*","cough",1);
	addButton(5,2,"PIZZAH!","pizza",1);
	addButton(6,2,"Nom Nom Nom","nom",0);
	addButton(7,2,"Goodbye","bye",0);
	addButton(8,2,"DINGA LINGA LINGA LINGA","dinga",1);
	addButton(9,2,"Longhorn Critical","longhorncrit",1);
	addButton(10,2,"Yay","win",1);
	addButton(11,2,"Secret Found","secret",1);
	addLyingButton(12,2);
	addSpecialButton(13,2,"Build info", "build");
	addLyingButton(14,2);

	addLyingButton(1,3);
	addButton(2,3,"Oh no...","ohno",1);
	addButton(3,3,"STOP!!","stop",4);
	addButton(4,3,"8","eight",1);
	addButton(5,3,"Bing Chilling!","bingchilling",1);
	addButton(6,3,"Vine Boom","vine",0);
	addButton(7,3,"GET","get",1);
	addButton(8,3,"","silent",0);
	addButton(9,3,"","silent",0);
	addButton(10,3,"","silent",0);
	addButton(11,3,"","silent",0);
	addLyingButton(12,3);
	addLyingButton(13,3);

	addLyingButton(1,4);
	addButton(2,4,"","silent",0);
	addButton(3,4,"","silent",0);
	addButton(4,4,"","silent",0);
	addButton(5,4,"","silent",0);
	addButton(6,4,"","silent",0);
	addButton(7,4,"","silent",0);
	addButton(8,4,"","silent",0);
	addButton(9,4,"","silent",0);
	addButton(10,4,"","silent",0);
	addButton(11,4,"","silent",0);
	addLyingButton(12,4);

	summonQuietAudio("sys_tritone");
	setInterval(notificationBarHandler, 100);
	
	var scriptUpdateFrame = document.createElement("iframe");
	scriptUpdateFrame.id = "scriptiframe";
	scriptUpdateFrame.src = ("main.js");
	document.body.appendChild(scriptUpdateFrame);

	setTimeout(scriptframecheck, 500);
}

function identityPromptPhase3(a, b) {
	window.console.log(a, b);

	document.getElementById("idPrmptAnimKey2D").style.color = "#FFF0";
}

function identityPromptPhase2(whatwas) {
	document.getElementById("kbinfo1").style.opacity = "0";
	document.getElementById("kbinfo2").style.opacity = "1";

	document.getElementById("idPrmptAnimKey1").className = "promptkeyb2";
	document.getElementById("idPrmptAnimKey1Top").className = "promptkeyb2 promptkey2";
	document.getElementById("idPrmptAnimKey3").className = "promptkeyb3";
	document.getElementById("idPrmptAnimKey3Top").className = "promptkeyb3 promptkey3";

	document.getElementById("idPrmptAnimKey2D").style.color = "#FFF0";
				document.getElementById("idPrmptAnimKey2C").style.filter = "opacity(100%)";

	document.body.addEventListener("keydown", function(ratios) {
		if (detectdb == "1") {
			detectdb = "2";
				document.getElementById("idPrmptAnimKey2C").style.filter = "opacity(0%)";
			document.getElementById("idPrmptAnimKey2D").innerHTML = ratios["key"];
			document.getElementById("idPrmptAnimKey2D").style.color = "#FFFF";
			setTimeout(identityPromptPhase3, 1000, whatwas, ratios["key"]);
		}
	});
}

function identityPrompt() {
	var search1 = ((window.location.search).search("kb=dv"));
	var search2 = ((window.location.search).search("kb=qw"));
	var search3 = ((window.location.search).search("kb=az"));
	var search4 = ((window.location.search).search("kb=co"));
	window.console.log(search1 + ", " + search2 + ", " + search3 + ", " + search4);
	if (search1 == -1 && search2 == -1 && search3 == -1 && search4 == -1) {
		document.getElementById("identifiyPrompt").style.display = "initial";
		document.getElementById("identifiyPrompt").style.opacity = "1";

		document.getElementById("idPrmptAnimKey1").className = "promptkeyb1";
		document.getElementById("idPrmptAnimKey1Top").className = "promptkeyb1 promptkey1";
		document.getElementById("idPrmptAnimKey3").className = "promptkeyb2";
		document.getElementById("idPrmptAnimKey3Top").className = "promptkeyb2 promptkey2";
		document.getElementById("idPrmptAnimKey2D").style.color = "#FFF0";
				document.getElementById("idPrmptAnimKey2C").style.filter = "opacity(100%)";

		detectdb = "0";

		document.body.addEventListener("keydown", function(ratios) {
			if (detectdb == "0") {
				detectdb = "1";
				document.getElementById("idPrmptAnimKey2C").style.filter = "opacity(0%)";
				document.getElementById("idPrmptAnimKey2D").innerHTML = ratios["key"];
				document.getElementById("idPrmptAnimKey2D").style.color = "#FFFF";
				setTimeout(identityPromptPhase2, 1000, ratios["key"]);
			}
		});
	}
//	var canvas = document.getElementById("idPrmptAnim");
//	var ctx = canvas.getContext("2d");
//	var img = document.getElementById("internal_keyprompts");
//	ctx.drawImage(img, 0,0, 1200,640, 0,0, 240,128);
//	ctx.drawImage(img, 1800,0, 600,640, 128,0, 120,128);
//	ctx.drawImage(img, 1200,0, 600,640, 128,0, 120,128);
}

