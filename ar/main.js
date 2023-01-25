var dt = new Date();
var dt2 = new Date();

var data;
var loaded;
var loadpath;
var pathname;
var temp0;
var temp1;
var temp2;
var temp3;
var temp4;
var temp5;
var temp6;
var temp7;
var temp8;
var temp9;
var tempA;
var tempB;
var tempC;
var tempD;
var tempE;
var tempF;

var currTheme = 0;

var sys_aud_id_1 = 0;
var sys_alt_id_1 = 0;
var sys_aud_id_2 = 0;
var sys_alt_id_2 = 0;
var nudge_timer = 0;
var erranim = false;

var ap_audio;
var audioMerge = [];
var audioWave = [];

const dtmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sma"];
const formats = {
	"audio": ["mp3","wav","ogg","mp2","paf"],
	"video": ["mp4","mov","pvf"],
	"image": ["png","gif","svg","jpg","pif"]
}

const sys_aud_src = {
	"error": "error.wav",
	"notice": "notice.wav",
	"nudge": "nudge.wav"
}

const audioCtx = new AudioContext();
const audioSplit = audioCtx.createChannelSplitter(32);
const audioMergeC = audioCtx.createChannelMerger(2);
const audioMergeL = audioCtx.createStereoPanner();
audioMergeL.pan.setValueAtTime(-1, audioCtx.currentTime);
const audioMergeR = audioCtx.createStereoPanner();
audioMergeR.pan.setValueAtTime(1, audioCtx.currentTime);
const audioDest = audioCtx.createMediaStreamDestination();

function controlHandler() {
//	vp_cont_play

/*	if (document.querySelectorAll("#videoplayer_show:hover, #vp_timer:hover, #vp_controls:hover").length == 0) {
		document.getElementById("vp_controls").style.bottom = "-24px";
		document.getElementById("vp_timer").style.bottom = "0px";
	} else {
		document.getElementById("vp_controls").style.bottom = "0px";
		document.getElementById("vp_timer").style.bottom = "24px";
	} */

		if (document.getElementById("audioplayer").style.display != "none") {
			if (document.getElementById("ap_show").duration != NaN) {
				document.getElementById("ap_timer").style.width = String(100 * (document.getElementById("ap_show").currentTime / document.getElementById("ap_show").duration)) + "%";

				document.getElementById("ap_preload").style.left = String(Math.max(100 * (Math.abs(document.getElementById("ap_show").buffered.start(0)) / document.getElementById("ap_show").duration), 0)) + "%";

				document.getElementById("ap_preload").style.width = String(100 * (Math.abs(document.getElementById("ap_show").buffered.start(0) - document.getElementById("ap_show").buffered.end(0)) / document.getElementById("ap_show").duration)) + "%";
				document.getElementById("ap_digits").innerHTML = parseTimer(document.getElementById("ap_show").currentTime) + "/" + parseTimer(document.getElementById("ap_show").duration);
				document.getElementById("ap_timerslider").max = String(document.getElementById("ap_show").duration);
				document.getElementById("ap_timerslider").value = document.getElementById("ap_show").currentTime;

				for (let aptu_x = 0; aptu_x < 8; aptu_x++) {
					audioWave[(aptu_x * 2)].an.getByteTimeDomainData(audioWave[(aptu_x * 2)].ar);
					audioWave[(aptu_x * 2) + 1].an.getByteTimeDomainData(audioWave[(aptu_x * 2) + 1].ar);

					audioWave[(aptu_x * 2)].mv = 128;
					audioWave[(aptu_x * 2) + 1].mv = 128;
					for (let aptu_i = 0; aptu_i < audioWave[(aptu_x * 2)].ar.length; aptu_i++) {
						if (audioWave[(aptu_x * 2)].ar[aptu_i] < audioWave[(aptu_x * 2)].mv) {
							audioWave[(aptu_x * 2)].mv = audioWave[(aptu_x * 2)].ar[aptu_i];
						}
					}
					for (let aptu_i = 0; aptu_i < audioWave[(aptu_x * 2) + 1].ar.length; aptu_i++) {
						if (audioWave[(aptu_x * 2) + 1].ar[aptu_i] < audioWave[(aptu_x * 2) + 1].mv) {
							audioWave[(aptu_x * 2) + 1].mv = audioWave[(aptu_x * 2) + 1].ar[aptu_i];
						}
					}

					audioWave[(aptu_x * 2)].ft.style.height = (200 - (audioWave[(aptu_x * 2)].mv * (200 / 128))) + "px";
					audioWave[(aptu_x * 2) + 1].ft.style.height = (200 - (audioWave[(aptu_x * 2) + 1].mv * (200 / 128))) + "px";

					audioWave[(aptu_x * 2)].tg.style.height = ((200 - (audioWave[(aptu_x * 2)].mv * (200 / 128))) * audioMerge[(aptu_x * 2)].gain.value) + "px";
					audioWave[(aptu_x * 2) + 1].tg.style.height = ((200 - (audioWave[(aptu_x * 2) + 1].mv * (200 / 128))) * audioMerge[(aptu_x * 2) + 1].gain.value) + "px";
				}
			}
		}
}

function summonAudio2(obj) {
	document.getElementById(obj).addEventListener("ended", function() {
		document.getElementById(obj).remove();
	});
	document.getElementById(obj).addEventListener("error", function() {
		window.console.warn("Failed to load file " + document.getElementById(obj).src + " for item: " + obj);
		document.getElementById(obj).remove();
	});
}

function summonAudio(obj) {
	var sys_audio = document.createElement("audio");
	sys_aud_id_2 = String(sys_aud_id_1);
	sys_audio.id = sys_aud_id_2;
	sys_aud_id_1++;
	if (sys_aud_id_1 > 511.5) {
		sys_aud_id_1 = 0;
	}
	document.head.appendChild(sys_audio);
	summonAudio2(sys_aud_id_2);
	sys_audio.src = sys_aud_src[obj];
	sys_audio.play();
}

function bufferAudio() {
	var sys_audio1 = document.createElement("audio");
	sys_aud_id_2 = String(sys_aud_id_1);
	sys_audio1.id = sys_aud_id_2;
	sys_aud_id_1++;
	if (sys_aud_id_1 > 511.5) {
		sys_aud_id_1 = 0;
	}
	document.head.appendChild(sys_audio1);
	summonAudio2(sys_aud_id_2);
	sys_audio1.src = sys_aud_src["error"];
	sys_audio1.volume = 0;
	sys_audio1.play();

	var sys_audio2 = document.createElement("audio");
	sys_aud_id_2 = String(sys_aud_id_1);
	sys_audio2.id = sys_aud_id_2;
	sys_aud_id_1++;
	if (sys_aud_id_1 > 511.5) {
		sys_aud_id_1 = 0;
	}
	document.head.appendChild(sys_audio2);
	summonAudio2(sys_aud_id_2);
	sys_audio2.src = sys_aud_src["notice"];
	sys_audio2.volume = 0;
	sys_audio2.play();

	var sys_audio3 = document.createElement("audio");
	sys_aud_id_2 = String(sys_aud_id_1);
	sys_audio3.id = sys_aud_id_2;
	sys_aud_id_1++;
	if (sys_aud_id_1 > 511.5) {
		sys_aud_id_1 = 0;
	}
	document.head.appendChild(sys_audio3);
	summonAudio2(sys_aud_id_2);
	sys_audio3.src = sys_aud_src["nudge"];
	sys_audio3.volume = 0;
	sys_audio3.play();
}

function nudger() {
	var elems = document.querySelectorAll(".alertbox_topbar, .application_topbar");
	var elems2 = [];

	for (let x in elems) {
		if (typeof(elems[x]) == "object") {
			elems2.push(elems[x]);
		}
	}

	for (let xx in elems2) {
		elems2[xx].classList.add("nudgeanimclass");

		if (nudge_timer <= Date.now()) {
			elems2[xx].classList.remove("nudgeanimclass");
		}
	}

	if (nudge_timer > Date.now()) {
		requestAnimationFrame(nudger);
	}
}

function removeError2(itm) {
	if (itm.classList.contains("alertbox")) {
		itm.remove();
	} else {
		itm.style.display = "none";
	}
	erranim = false;

	if (document.getElementsByClassName("alertbox").length == 0) {
		document.getElementById("alertbox_core").style.display = "none";
	}
	if (document.querySelectorAll('.application_main[style*="block"]').length == 0) {
		document.getElementById("application_core").style.display = "none";
	}
	if (document.querySelectorAll('.application_main[style*="block"]').length == 0) {
		clearInterval();
	}
}
function removeError(itm) {
	itm.classList.add("alertbox_closing");
	window.console.debug(itm.classList);

	if (itm.classList.contains("ap_app")) {
		document.getElementById("ap_show").pause();
	}
	if (itm.classList.contains("vp_app")) {
		document.getElementById("videoplayer_show").pause();
	}

	setTimeout(removeError2, 300, itm);
}
function addError(itm) {
	itm.style.display = "block";
	itm.classList.add("alertbox_opening");
	erranim = false;
}

function errorClose(itm) {
	if (erranim == false) {
		erranim = true;
		itm.classList.remove("alertbox_opening");
		setTimeout(removeError, 50, itm);
	} else {
		summonAudio("nudge");
	}
}

function errorOpen(itm) {
	document.getElementById("application_core").style.display = "block";
	if (erranim == false) {
		erranim = true;
		itm.classList.remove("alertbox_closing");
		setTimeout(addError, 50, itm);
	} else {
		summonAudio("nudge");
	}
}

function errorPopup(dat) {
	document.getElementById("alertbox_core").style.display = "block";
	summonAudio(dat.snd);

	temp7 = document.createElement("div");
	temp7.classList.add("alertbox");
	temp7.classList.add("alertbox_opening");
	document.getElementById("alertbox_alignment").appendChild(temp7);

	temp8 = document.createElement("div");
	temp8.classList.add("alertbox_topbar");
	temp8.classList.add("invertible");
	if (currTheme == 1) {
		temp8.classList.add("light");
	}
	temp8.innerHTML = dat.tit;
	temp7.appendChild(temp8);

	temp9 = document.createElement("div");
	temp9.classList.add("alertbox_main");
	temp9.classList.add("invertible");
	if (currTheme == 1) {
		temp9.classList.add("light");
	}
	temp9.innerHTML = dat.bdy;
	temp7.appendChild(temp9);

	if (dat.btn != 0) {
		temp8 = document.createElement("button");
		temp8.classList.add("alertbox_closer");
		temp8.classList.add("invertible");
		if (dat.btn == 2) {
			temp8.innerHTML = "Reload";
		} else {
			temp8.innerHTML = "OK";
		}
		temp9.appendChild(temp8);

		var tmp8 = temp8;
		var tmp7 = temp7;

		if (dat.btn == 2) {
			temp8.addEventListener("click", function(e) {
				if (e.target == tmp8) {
					window.location.reload();
				}
			});
		} else {
			temp8.addEventListener("click", function(e) {
				if (e.target == tmp8) {
					errorClose(tmp7);
				}
			});
		}
	}
}

function removeLoader() {
	document.getElementById("loader").style.display = "none";
}

function parseTimer(input) {
	var parseOutput = "";

	if (Math.floor(input / 3600) < 9.5) {
		parseOutput += "0" + Math.floor(input / 3600) + ":";
	} else {
		parseOutput += Math.floor(input / 3600) + ":";
	}
	if ((Math.floor(input / 60) % 60) < 9.5) {
		parseOutput += "0" + (Math.floor(input / 60) % 60) + ":";
	} else {
		parseOutput += (Math.floor(input / 60) % 60) + ":";
	}
	if ((Math.floor(input) % 60) < 9.5) {
		parseOutput += "0" + (Math.floor(input) % 60) + ":";
	} else {
		parseOutput += (Math.floor(input) % 60) + ":";
	}

	if ((Math.floor(input * 1000) % 1000) < 9.5) {
		parseOutput += "00" + (Math.floor(input * 1000) % 1000);
	} else if ((Math.floor(input * 1000) % 1000) < 99.5) {
		parseOutput += "0" + (Math.floor(input * 1000) % 1000);
	} else {
		parseOutput += (Math.floor(input * 1000) % 1000);
	}
	return parseOutput;
}

function parseDate(input) {
	var parseOutput = "";
	if (input.getDate() < 9.5) {
		parseOutput += "0" + input.getDate();
	} else {
		parseOutput += input.getDate();
	}
	parseOutput += " " + dtmonth[input.getMonth()];
	parseOutput += " " + input.getFullYear();
	parseOutput += " ("

	if (input.getHours() < 9.5) {
		parseOutput += "0" + input.getHours() + ":";
	} else {
		parseOutput += input.getHours() + ":";
	}
	if (input.getMinutes() < 9.5) {
		parseOutput += "0" + input.getMinutes() + ":";
	} else {
		parseOutput += input.getMinutes() + ":";
	}
	if (input.getSeconds() < 9.5) {
		parseOutput += "0" + input.getSeconds() + ")";
	} else {
		parseOutput += input.getSeconds() + ")";
	}

	return parseOutput;
}

function parseSize(input) {
	var output = "";
	if (input < 999.5) {
		output += input + "B";
	} else {
		if (Math.floor(input / 1000) < 999.5) {
			output += Math.floor(input / 1000) + "KB";
		} else {
			if (Math.floor((input / 1000) / 1000) < 999.5) {
				output += Math.floor((input / 1000) / 1000) + "MB";
			} else {
				output += Math.floor(((input / 1000) / 1000) / 1000) + "GB";
			}
		}
	}

	return output;
}

function getFolder() {
	try {
		var getfolder_returner = data.files;
		for (let x in loadpath) {
			getfolder_returner = getfolder_returner[Number(loadpath[x])]["files"];
		}
		return getfolder_returner;
	} catch {
		return data;
	}
}

function openApp(app, file) {
	if (app == "imageviewer") {
		document.getElementById("imageviewer_main").style.backgroundImage = 'url("' + "contents/" + pathname.join("/") + file.n + "." + file.t + "?anticache=" + dt.getTime() + '")';
		window.console.debug("Opened Image: ", "contents/" + pathname.join("/") + file.n + "." + file.t);
		errorOpen(document.getElementById("imageviewer"));
	} else if (app == "videoplayer") {
		setInterval(controlHandler, 50);
		document.getElementById("videoplayer_show").src = "contents/" + pathname.join("/") + file.n + "." + file.t + "?anticache=" + dt.getTime();
		window.console.debug("Opened Video: ", "contents/" + pathname.join("/") + file.n + "." + file.t);
		errorOpen(document.getElementById("videoplayer"));
	} else if (app == "audioplayer") {
		setInterval(controlHandler, 50);
		document.getElementById("ap_show").src = "contents/" + pathname.join("/") + file.n + "." + file.t + "?anticache=" + dt.getTime();
		window.console.debug("Opened Audio: ", "contents/" + pathname.join("/") + file.n + "." + file.t);
		errorOpen(document.getElementById("audioplayer"));
	} else {
		errorPopup({
			"snd":"error",
			"tit":"Preview Error",
			"bdy":"An unknown error occured while trying to load the preview.",
			"btn": 1
		});
	}
}

function expandDetails(item, details) {
	var toremove = document.getElementsByClassName("filedetails");
	for (let xx = (toremove.length - 1); xx > -1; xx--) {
		if (toremove.item(xx) != null) {
			toremove.item(xx).remove();
		}
	}

	temp1 = document.createElement("tr");
	temp1.id = "filedetails";
	temp1.classList.add("filedetails");
	temp0 = document.getElementById("fileitem" + item);
	temp0.after(temp1);

	temp3 = document.createElement("tr");
	temp3.classList.add("filedetails");
	temp1.after(temp3);

	temp2 = document.createElement("td");
	temp2.setAttribute("colspan", 5);
	temp3.appendChild(temp2);

	temp4 = document.createElement("table");
	temp4.classList.add("filedetailarea");
	temp4.id = "filedetailarea"
	temp2.appendChild(temp4);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.innerHTML = "<img alt=\"Can't load the preview.\">";
	temp6.setAttribute("rowspan",5);
	temp5.appendChild(temp6);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "right";
	temp6.innerHTML = details.t + " File";
	temp5.appendChild(temp6);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "right";
	temp6.innerHTML = "Size";
	temp5.appendChild(temp6);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "right";
	temp6.innerHTML = "X";
	temp5.appendChild(temp6);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "right";
	temp6.innerHTML = "Y";
	temp5.appendChild(temp6);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "right";
	temp6.innerHTML = "Time";
	temp5.appendChild(temp6);

	temp5 = document.createElement("tr");
	temp4.appendChild(temp5);

	temp6 = document.createElement("td");
	temp6.style.textAlign = "center";
	temp6.style.height = "18px";
	temp6.setAttribute("colspan", 2);

	tempA = document.createElement("button");
	tempA.id = "previewButton";
	tempA.style.textAlign = "center";
	tempA.innerHTML = "No Preview";

	if (formats.audio.includes(details.t)) {
		tempA.innerHTML = "Open in Audio Player";
		tempA.addEventListener("click", function(e) {
			openApp("audioplayer", details);
		});
	} else if (formats.video.includes(details.t)) {
		tempA.innerHTML = "Open in Video Player";
		tempA.addEventListener("click", function(e) {
			openApp("videoplayer", details);
		});
	} else if (formats.image.includes(details.t)) {
		tempA.innerHTML = "Open in Image Viewer";
		tempA.addEventListener("click", function(e) {
			openApp("imageviewer", details);
		});
	} else {
		tempA.addEventListener("click", function(e) {
			errorPopup({
				"snd":"error",
				"tit":"Preview Not Available",
				"bdy":"Preview is not available for this file type.",
				"btn": 1
			});
		});
	}

	temp6.appendChild(tempA);
	temp5.appendChild(temp6);


//	Normal: 27; Exp: 22

	window.console.debug((item * 20) + 200);
	window.console.debug(document.getElementById("mcont").scrollTop);
	window.console.debug(document.getElementById("mcont").clientHeight);

	if (((item * 20) + 200) > (document.getElementById("mcont").clientHeight + document.getElementById("mcont").scrollTop)) {
		document.getElementById("mcont").scrollTop = document.getElementById("mcont").scrollTop + 120;
	}
/*

	if ((((document.getElementById("mcont").scrollTop + 20) + (item * 20)) > window.innerHeight - 40)) {
		document.getElementById("mcont").scrollTop = document.getElementById("mcont").scrollTop + 120;
	} */
}

function navigation(n, x) {
	document.getElementById("loader").style.display = "block";
	if (x == "upp") {
		if (loadpath.length == 0) {
			summonAudio("notice");
		}
		loadpath.pop();
		pathname.pop();
	} else if (x == "home") {
		if (loadpath.length == 0) {
			summonAudio("notice");
		}
		loadpath = [];
		pathname = [];
	} else {
		loadpath.push(x);
		pathname.push(n);
	}
	loaded = getFolder();
	addList();
}

function addList() {
	try {
		document.getElementById("pathname").innerHTML = "/tlw/";
		for (let x in pathname) {
			document.getElementById("pathname").innerHTML += pathname[x] + "/";
		}

		document.getElementById("file_list_target").innerHTML = "";
		for (let x in loaded) {
			temp1 = document.createElement("tr");
			temp1.id = "fileitem" + x;
			temp1.classList.add("maintr");
			temp0 = document.getElementById("file_list_target");
			temp0.appendChild(temp1);

			if (loaded[x].t == "folder") {
				temp1.addEventListener("click", function() { navigation(loaded[x].n, x); });
			} else {
				temp1.addEventListener("click", function() { expandDetails(x, loaded[x]); });
			}

			temp2 = document.createElement("td");
			temp2.innerHTML = "";
			temp1.appendChild(temp2);

			temp2 = document.createElement("td");
			temp2.style.textAlign = "right";
			temp2.innerHTML = loaded[x].n;
			temp1.appendChild(temp2);

			if (loaded[x].t == "folder") {
				temp2 = document.createElement("td");
				temp2.innerHTML = "&nbspFolder";
				temp1.appendChild(temp2);

				temp2 = document.createElement("td");
				temp2.innerHTML = "---";
				temp1.appendChild(temp2);

				temp2 = document.createElement("td");
				dt2.setTime(loaded[x].m);
				temp2.innerHTML = parseDate(dt2);
				temp1.appendChild(temp2);
			} else {
				temp2 = document.createElement("td");
				temp2.innerHTML = "." + loaded[x].t;
				temp1.appendChild(temp2);

				temp2 = document.createElement("td");
				temp2.innerHTML = parseSize(loaded[x].s);
				temp1.appendChild(temp2);

				temp2 = document.createElement("td");
				dt2.setTime(loaded[x].m);
				temp2.innerHTML = parseDate(dt2);
				temp1.appendChild(temp2);
			}
		}

		removeLoader();
	} catch {
		errorPopup({
			"snd":"error",
			"tit":"Build Error",
			"bdy":"An unknown error occured while trying to build the list.",
			"btn": 2
		});
	}
}

function theme(thm) {
	if (thm == 1) {
		currTheme = 1;
		document.getElementById("light").style.display = "none";
		document.getElementById("dark").style.display = "block";
		var toremove = document.getElementsByClassName("invertible");
		for (let xx = (toremove.length - 1); xx > -1; xx--) {
			if (toremove.item(xx) != null) {
				toremove.item(xx).classList.add("light");
			}
		}
	} else {
		currTheme = 0;
		document.getElementById("light").style.display = "block";
		document.getElementById("dark").style.display = "none";
		var toremove = document.getElementsByClassName("invertible");
		for (let xx = (toremove.length - 1); xx > -1; xx--) {
			if (toremove.item(xx) != null) {
				toremove.item(xx).classList.remove("light");
			}
		}
	}
}

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
	try {
		data = JSON.parse(this.responseText);
		loaded = data.files;
		loadpath = [];
		pathname = [];
		dt2.setTime(data.updated);
		document.getElementById("updated").innerHTML = "Last index: " + parseDate(dt2);
		addList();
	} catch {
		errorPopup({
			"snd":"error",
			"tit":"Can't Load Files",
			"bdy":"The file index could not be parsed correctly. It might be updating.<br>&nbsp<br>Try again in a minute or so.",
			"btn": 2
		});
	}
};

xmlhttp.onerror = function() {
	errorPopup({
		"snd":"error",
		"tit":"Can't Load Files",
		"bdy":"The file index could not be received. It might be updating.<br>&nbsp<br>Try again in a minute or so.",
		"btn": 2
	});
};

function ap_playpause() {
	if (document.getElementById("ap_show").paused == true) {
		document.getElementById("ap_show").play();
	} else {
		document.getElementById("ap_show").pause();
	}
}

function vp_playpause() {
	if (document.getElementById("videoplayer_show").paused == true) {
		document.getElementById("videoplayer_show").play();
	} else {
		document.getElementById("videoplayer_show").pause();
	}
}

function initPage() {
	if (dt.getFullYear() > 2023) {
		document.getElementById("copyright").innerHTML = "Pawkin, 2023 - " + dt.getFullYear();
	} else {
		document.getElementById("copyright").innerHTML = "Pawkin, 2023";
	}

	bufferAudio();

	document.getElementById("alertbox_core").addEventListener("click", function(e) {
		if ((e.target == document.getElementById("alertbox_core")) || (e.target == document.getElementById("alertbox_alignment"))) {
			nudge_timer = (Date.now() + 1000);
			summonAudio("nudge");
			requestAnimationFrame(nudger);
		}
	});

	document.getElementById("application_core").addEventListener("click", function(e) {
		if ((e.target == document.getElementById("application_core")) || (e.target == document.getElementById("application_alignment"))) {
			nudge_timer = (Date.now() + 1000);
			summonAudio("nudge");
			requestAnimationFrame(nudger);
		}
	});

	document.getElementById("videoplayer_show").addEventListener("timeupdate", function(e) {
		if (document.getElementById("videoplayer_show").duration != NaN) {
			document.getElementById("vp_timer").style.width = String(100 * (document.getElementById("videoplayer_show").currentTime / document.getElementById("videoplayer_show").duration)) + "%";
		}
	});
/*	document.getElementById("ap_show").addEventListener("timeupdate", function(e) {
		if (document.getElementById("ap_show").duration != NaN) {
			document.getElementById("ap_timer").style.width = String(100 * (document.getElementById("ap_show").currentTime / document.getElementById("ap_show").duration)) + "%";
			document.getElementById("ap_digits").innerHTML = parseTimer(document.getElementById("ap_show").currentTime) + "/" + parseTimer(document.getElementById("ap_show").duration);
		}
	}); */

	document.getElementById("videoplayer_show").addEventListener("play", function(e) {
		document.getElementById("vp_cont_play").style.display = "none";
		document.getElementById("vp_cont_pause").style.display = "block";
		document.getElementById("vp_cont_replay").style.display = "none";
	});
	document.getElementById("videoplayer_show").addEventListener("pause", function(e) {
		document.getElementById("vp_cont_play").style.display = "block";
		document.getElementById("vp_cont_pause").style.display = "none";
		document.getElementById("vp_cont_replay").style.display = "none";
	});
	document.getElementById("videoplayer_show").addEventListener("ended", function(e) {
		document.getElementById("vp_cont_play").style.display = "none";
		document.getElementById("vp_cont_pause").style.display = "none";
		document.getElementById("vp_cont_replay").style.display = "block";
	});


	document.getElementById("ap_show").addEventListener("play", function(e) {
		document.getElementById("ap_cont_play").style.display = "none";
		document.getElementById("ap_cont_pause").style.display = "block";
		document.getElementById("ap_cont_replay").style.display = "none";
	});
	document.getElementById("ap_show").addEventListener("pause", function(e) {
		document.getElementById("ap_cont_play").style.display = "block";
		document.getElementById("ap_cont_pause").style.display = "none";
		document.getElementById("ap_cont_replay").style.display = "none";
	});
	document.getElementById("ap_show").addEventListener("ended", function(e) {
		document.getElementById("ap_cont_play").style.display = "none";
		document.getElementById("ap_cont_pause").style.display = "none";
		document.getElementById("ap_cont_replay").style.display = "block";
	});

	document.getElementById("b1").addEventListener("click", function(e) {
		navigation("blar","home");
	});
	document.getElementById("b2").addEventListener("click", function(e) {
		navigation("blar","upp");
	});

	document.getElementById("imageviewer_closer").addEventListener("click", function(e) {
		if (e.target == document.getElementById("imageviewer_closer")) {
			errorClose(document.getElementById("imageviewer"));
		}
	});
	document.getElementById("videoplayer_closer").addEventListener("click", function(e) {
		if (e.target == document.getElementById("videoplayer_closer")) {
			errorClose(document.getElementById("videoplayer"));
		}
	});
	document.getElementById("audioplayer_closer").addEventListener("click", function(e) {
		if (e.target == document.getElementById("audioplayer_closer")) {
			errorClose(document.getElementById("audioplayer"));
		}
	});

	ap_audio = audioCtx.createMediaElementSource(document.getElementById("ap_show"));
	ap_audio.connect(audioSplit);

	for (let ap_x = 0; ap_x < 8; ap_x++) {
		audioWave[(ap_x * 2)] = {};
		audioWave[(ap_x * 2)].mv = 0;
		audioWave[(ap_x * 2)].an = audioCtx.createAnalyser();
		audioWave[(ap_x * 2)].an.fftSize = 2048;
		audioWave[(ap_x * 2)].bl = (audioWave[(ap_x * 2)].an.frequencyBinCount);
		audioWave[(ap_x * 2)].ar = new Uint8Array(audioWave[(ap_x * 2)].an.frequencyBinCount);
		audioWave[(ap_x * 2)].an.getByteTimeDomainData(audioWave[(ap_x * 2)].ar);
		audioWave[(ap_x * 2)].tg = document.getElementById("ap_mixer_" + ap_x).querySelector(".ap_mixer_left");
		audioWave[(ap_x * 2)].ft = document.getElementById("ap_mixer_" + ap_x).querySelector(".ap_mixer_fullleft");

		audioWave[(ap_x * 2) + 1] = {};
		audioWave[(ap_x * 2) + 1].mv = 0;
		audioWave[(ap_x * 2) + 1].an = audioCtx.createAnalyser();
		audioWave[(ap_x * 2) + 1].an.fftSize = 2048;
		audioWave[(ap_x * 2) + 1].bl = (audioWave[(ap_x * 2)].an.frequencyBinCount);
		audioWave[(ap_x * 2) + 1].ar = new Uint8Array(audioWave[(ap_x * 2)].an.frequencyBinCount);
		audioWave[(ap_x * 2) + 1].an.getByteTimeDomainData(audioWave[(ap_x * 2)].ar);
		audioWave[(ap_x * 2) + 1].tg = document.getElementById("ap_mixer_" + ap_x).querySelector(".ap_mixer_right");
		audioWave[(ap_x * 2) + 1].ft = document.getElementById("ap_mixer_" + ap_x).querySelector(".ap_mixer_fullright");

		audioMerge[(ap_x * 2)] = audioCtx.createGain();
		audioMerge[(ap_x * 2)].gain.setValueAtTime(1, audioCtx.currentTime);
		audioSplit.connect(audioMerge[(ap_x * 2)], (ap_x * 2));
		audioMerge[(ap_x * 2)].connect(audioMergeL, 0);

		audioMerge[(ap_x * 2) + 1] = audioCtx.createGain();
		audioMerge[(ap_x * 2) + 1].gain.setValueAtTime(1, audioCtx.currentTime);
		audioSplit.connect(audioMerge[(ap_x * 2) + 1], (ap_x * 2) + 1);
		audioMerge[(ap_x * 2) + 1].connect(audioMergeR, 0);

		audioSplit.connect(audioWave[(ap_x * 2)].an, (ap_x * 2));
		audioSplit.connect(audioWave[(ap_x * 2) + 1].an, (ap_x * 2) + 1);
	}
	audioMergeL.connect(audioMergeC, 0, 0);
	audioMergeR.connect(audioMergeC, 0, 1);
	audioMergeC.connect(audioCtx.destination);

	var mixelems = document.getElementsByClassName("ap_mixer");

	for (let mix_x = 0; mix_x < mixelems.length; mix_x++) {
		var mix_x_elem = mixelems[mix_x].querySelector("input");
		var mix_x_elem2 = mixelems[mix_x].querySelector(".ap_mixer_marker");

		if (mix_x_elem != null && mix_x_elem2 != null) {
			mix_x_elem.addEventListener("input", function(e) {
				e.srcElement.parentElement.querySelector(".ap_mixer_marker").style.bottom = (Number(e.srcElement.value) * 1.9) + "px";
				audioMerge[(mix_x * 2)].gain.setValueAtTime((Number(e.srcElement.value) / 100), audioCtx.currentTime);
				audioMerge[(mix_x * 2) + 1].gain.setValueAtTime((Number(e.srcElement.value) / 100), audioCtx.currentTime);
			});
			mix_x_elem.addEventListener("wheel", function(e) {
				e.srcElement.value = Number(e.srcElement.value) + (e.deltaY / 10);
				e.srcElement.parentElement.querySelector(".ap_mixer_marker").style.bottom = (Number(e.srcElement.value) * 1.9) + "px";
				audioMerge[(mix_x * 2)].gain.setValueAtTime((Number(e.srcElement.value) / 100), audioCtx.currentTime);
				audioMerge[(mix_x * 2) + 1].gain.setValueAtTime((Number(e.srcElement.value) / 100), audioCtx.currentTime);
			});

			mix_x_elem.parentElement.querySelector(".ap_mixer_marker").style.bottom = (Number(mix_x_elem.value) * 1.9) + "px";
			audioMerge[(mix_x * 2)].gain.setValueAtTime((Number(mix_x_elem.value) / 100), audioCtx.currentTime);
			audioMerge[(mix_x * 2) + 1].gain.setValueAtTime((Number(mix_x_elem.value) / 100), audioCtx.currentTime);
		}
	}

	document.getElementById("ap_timerslider").addEventListener("input", function(e) {
		document.getElementById("ap_show").currentTime = e.srcElement.value;
	});

	xmlhttp.open("GET", "./listing.json?anticache=" + dt.getTime());
	xmlhttp.send();
}