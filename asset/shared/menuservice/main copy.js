// JavaScript Document

	var elm;
	var newone;
	var aelm;
	var anewone;
	var mx;
	var IsClick = "false";
	var IsOpen = "false";
	var IsSubOpen = "false";
	var IsSound = "true";
	var chld;
	var chldb;
	var stng;
	var i;
	var ii;
	var iii;
	var iiii;
	var hoveri;
	var hoverii;
	var pme_error_btnm_targ = "close";
	var pme_error_btn2_targ = "close";
	var pme_error_btn3_targ = "close";

	var xmlobj;

	//window.location.assign("http://www.twitter.com/cat1554official")

	function closeError() {
		document.getElementById("error_discord").style.display = "none";
		IsSound = "true";
		IsClick = "false";
	}
	function goneTwitter() {
		document.getElementById("outline_twitter").style.display = "none";
		document.getElementById("twitter_window").style.display = "none";
		IsSound = "true";
		IsClick = "false";
	}
	function cancelTwitter() {
		elm = document.getElementById("wcl");
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		document.getElementById("wcl").pause();
		document.getElementById("wcl").currentTime = 0;
		document.getElementById("wcl").play();
		document.getElementById("twitter_window").style.display = "none";
		document.getElementById("outline_twitter").style.display = "block";
		document.getElementById("outline_twitter").style.animationName = "zoom";
		document.getElementById("outline_twitter").style.animationDuration = "0.2s";
		document.getElementById("outline_twitter").style.animationDirection = "reverse";
		document.getElementById("outline_twitter").style.animationTimingFunction = "linear";
		document.getElementById("outline_twitter").style.width = "0px";
		document.getElementById("outline_twitter").style.height = "0px";
		document.getElementById("outline_twitter").style.top = "-50px";
		document.getElementById("outline_twitter").style.animationDelay = "0ms";
		elm = document.getElementById("outline_twitter");
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		mx = window.setTimeout(goneTwitter, 250);
	}
	function goTwitter() {
		document.getElementById("outline_twitter").style.display = "none";
		document.getElementById("twitter_window").style.display = "block";
//		document.getElementById("twitter-widget-0").style.position = "relative";
//		document.getElementById("twitter-widget-0").style.left = "5px";
		IsClick = "false";
		closeMenu();
		IsClick = "true";
	}
	function twitterWarning() {
		elm = document.getElementById("wop");
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		document.getElementById("wop").pause();
		document.getElementById("wop").currentTime = 0;
		document.getElementById("wop").play();
		document.getElementById("outline_twitter").style.display = "block";
		document.getElementById("outline_twitter").style.animationName = "zoom";
		document.getElementById("outline_twitter").style.animationDuration = "0.2s";
		document.getElementById("outline_twitter").style.animationDirection = "normal";
		document.getElementById("outline_twitter").style.animationTimingFunction = "linear";
		document.getElementById("outline_twitter").style.animationDelay = "100ms";
		document.getElementById("outline_twitter").style.width = "0px";
		document.getElementById("outline_twitter").style.height = "0px";
		document.getElementById("outline_twitter").style.top = "-50px";
		elm = document.getElementById("outline_twitter");
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		mx = window.setTimeout(goTwitter, 300);
	}
	function yeahNahMate() {
		elm = document.getElementById("tng");
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		document.getElementById("tng").pause();
		document.getElementById("tng").currentTime = 0;
		document.getElementById("tng").play();
		document.getElementById("error_discord").style.display = "block";
	}
	function redirThingB(toGoTo, mode, link, menuSrc, clickedOn) {
		switch(mode) {
		case "link":
			window.location.assign(link)
			break;
		case "extlink":
			IsClick = "false";
			IsSound = "false";
			closeMenu();
			IsClick = "true";
			IsSound = "false";
			IsClick = "true";
			mx = window.setTimeout(twitterWarning, 300);
			var toHighlight = "eggs".concat(toGoTo);
			document.getElementById(toHighlight).style.animationName = "";
			elm = document.getElementById(toHighlight);
			newone = elm.cloneNode(true);
			elm.parentNode.replaceChild(newone, elm);
			break;
		case "procrastinate":
			IsSound = "false";
			IsClick = "false";
			document.getElementById(clickedOn).style.animationName = "";
			elm = document.getElementById(clickedOn);
			var oldonmouseover = document.getElementById(clickedOn).onmouseover;
			var oldonmousedown = document.getElementById(clickedOn).onmousedown;
			newone = elm.cloneNode(true);
			elm.parentNode.replaceChild(newone, elm);
			elm = document.getElementById(clickedOn);
			elm.onmouseover = oldonmouseover;
			elm.onmousedown = oldonmousedown;
			closeMenu(menuSrc);
			IsSound = "true";
			break;
		default:
			window.location.reload();
		}
	}
	function clickHandle(selectorz, mnu, mode, link) {
		if (IsClick == "false") {
//			procrastinate
//			link
		var toHighlight = String(mnu).concat("_",selectorz);
		document.getElementById("sel").play();
		document.getElementById("hvr").pause();
		IsClick = true;
		document.getElementById(toHighlight).style.animationName = "buttonFlashAnim";
		document.getElementById(toHighlight).style.animationDuration = "0.1s";
		document.getElementById(toHighlight).style.animationDuration = "0.1s";
		document.getElementById(toHighlight).style.animationIterationCount = "infinite";
		document.getElementById(toHighlight).style.animationTimingFunction = "linear";
		document.getElementById(toHighlight).className = "menuButtonStyle";
		elm = document.getElementById(toHighlight);
		var oldonmouseover = document.getElementById(toHighlight).onmouseover;
		var oldonmousedown = document.getElementById(toHighlight).onmousedown;
		newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
		elm = document.getElementById(toHighlight);
		elm.onmouseover = oldonmouseover;
		elm.onmousedown = oldonmousedown;

		mx = window.setTimeout(redirThingB, 500, selectorz, mode, link, mnu, toHighlight);
		}
	}
	function hoverable(hovered) {
		if (IsClick == "false") {
				document.getElementById("hvr").pause();
				document.getElementById("hvr").currentTime = 0;
				document.getElementById("hvr").play();
		}
	}
	function openMenu(idName) {
		if (IsClick == "false") {
			document.getElementById(String(idName).concat("_Mainbutton")).style.backgroundColor = "#AAAAFF";
			document.getElementById(String(idName).concat("_Mainbutton")).style.color = "#FFFFFF";
			
			chld = document.getElementById(idName).getElementsByTagName("button");

			for (i = 0; i < chld.length; i++) {
				chld[i].style.display = "inline";
			}
			document.getElementById("opn").play();
			IsOpen = "true";
		}
	}
	function closeMenu(idName) {
		if (IsClick == "false") {
			document.getElementById(String(idName).concat("_Mainbutton")).style.backgroundColor = "#FFFFFF";
			document.getElementById(String(idName).concat("_Mainbutton")).style.color = "#000000";
			
			chld = document.getElementById(idName).children;

			for (i = 0; i < chld.length; i++) {
				chld[i].style.display = "none";
			}
			document.getElementById(String(idName).concat("_Mainbutton")).style.display = "inline";
			if (IsOpen == "true") {
				if (IsSound == "true") {
					elm = document.getElementById("cls");
					newone = elm.cloneNode(true);
					elm.parentNode.replaceChild(newone, elm);
					document.getElementById("cls").pause();
					document.getElementById("cls").currentTime = 0;
					document.getElementById("cls").play();
				}
			}
//			document.getElementById("hvrHold").innerHTML = "";
			IsOpen = "false";
		}
	}
	function openSubMenu(menID, mnID) {
		if (IsClick == "false") {
			stng = String(menID).concat("_",mnID,"_sub");
			chld = document.getElementById(stng).getElementsByTagName("button");

			for (i = 0; i < chld.length; i++) {
				chld[i].style.display = "inline";
			}
			
			document.getElementById(stng).style.display = "inline";
			//document.getElementById("opn").play();
			IsSubOpen = "true";
		}
	}
	function closeSubMenu(menID, mnID) {
		if (IsClick == "false") {
			stng = String(menID).concat("_",mnID,"_sub");
			chld = document.getElementById(stng).children;

			for (i = 0; i < chld.length; i++) {
				chld[i].style.display = "none";
			}
			if (IsSubOpen == "true") {
				if (IsSound == "true") {
					//elm = document.getElementById("cls");
					//newone = elm.cloneNode(true);
					//elm.parentNode.replaceChild(newone, elm);
					//document.getElementById("cls").pause();
					//document.getElementById("cls").currentTime = 0;
					//document.getElementById("cls").play();
				}
			}
			
			document.getElementById(stng).style.display = "none";
			IsSubOpen = "false";
		}
	}

var textnode;
var menuObj;
var elementThing;
var currSub;
var currSet;
var mySvg = "http://www.w3.org/2000/svg";
var svgObj;

// For each contents, create a button.

//createMenu(150, "Navigate", "NavMenu", 150, "down", "absolute", 0, 0)

menuObj = document.createElement("div");
menuObj.id = "hvrHold";
elementThing = document.head;
elementThing.appendChild(menuObj);

function createMenu(width, text, setid, depth, direction, position, xpos, ypos, showbg) {
	menuObj = document.createElement("div");
	menuObj.id = setid;
	//var textnode = document.createTextNode(text);
	//menuObj.appendChild(textnode);
	elementThing = document.body;
	elementThing.appendChild(menuObj);

	//document.getElementById(setid).style.backgroundColor = "#AAAAFF";
	//document.getElementById(setid).style.color = "#000000";
	if (showbg == "true") {
		document.getElementById(setid).style.backgroundColor = "#aaaaaa";
	} else {
		document.getElementById(setid).style.backgroundColor = "transparent";
	}
	document.getElementById(setid).style.color = "#000000";
	document.getElementById(setid).style.width = String(width).concat("px");
	document.getElementById(setid).style.height = String((depth + 1) * 20).concat("px");
	document.getElementById(setid).style.position = position;
	document.getElementById(setid).style.left = String(xpos).concat("px");
	document.getElementById(setid).style.top = String(ypos).concat("px");
	document.getElementById(setid).onmouseleave = function(){closeMenu(setid)};

	//String(text).concat("back");
	menuObj = document.createElement("button");
	menuObj.id = String(setid).concat("_Mainbutton");
	textnode = document.createTextNode(text);
	menuObj.appendChild(textnode);
	elementThing = document.getElementById(setid);
	elementThing.appendChild(menuObj);

	document.getElementById(String(setid).concat("_Mainbutton")).style.backgroundColor = "#FFFFFF";
	document.getElementById(String(setid).concat("_Mainbutton")).style.color = "#000000";
	document.getElementById(String(setid).concat("_Mainbutton")).style.width = String(width).concat("px");
	document.getElementById(String(setid).concat("_Mainbutton")).style.height = "20px";
	document.getElementById(String(setid).concat("_Mainbutton")).style.margin = "auto";
	document.getElementById(String(setid).concat("_Mainbutton")).style.textAlign = "left";
	document.getElementById(String(setid).concat("_Mainbutton")).style.fontWeight = "700";
	document.getElementById(String(setid).concat("_Mainbutton")).style.position = "absolute";
	document.getElementById(String(setid).concat("_Mainbutton")).style.left = "0px";
	document.getElementById(String(setid).concat("_Mainbutton")).className = "menuButtonStyle";
	document.getElementById(String(setid).concat("_Mainbutton")).onmousedown = function(){openMenu(setid)};
	if (direction == "down") {
		document.getElementById(String(setid).concat("_Mainbutton")).style.top = "0px";
	} else if (direction == "up") {
		document.getElementById(String(setid).concat("_Mainbutton")).style.top = String(depth - 20).concat("px");
	}
}

function createButton(width, text, setid, menuid, position, xpos, ypos, mode, link, isSub){
	//String(text).concat("back");
	menuObj = document.createElement("button");
	menuObj.id = String(menuid).concat("_",setid);
	textnode = document.createTextNode(text);
	menuObj.appendChild(textnode);
	elementThing = document.getElementById(menuid);
	elementThing.appendChild(menuObj);

	document.getElementById(String(menuid).concat("_",setid)).style.width = String(width).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).style.height = "20px";
	document.getElementById(String(menuid).concat("_",setid)).style.margin = "auto";
	document.getElementById(String(menuid).concat("_",setid)).style.textAlign = "left";
	document.getElementById(String(menuid).concat("_",setid)).style.display = "none";
	document.getElementById(String(menuid).concat("_",setid)).style.fontWeight = "700";
	document.getElementById(String(menuid).concat("_",setid)).style.position = position;
	document.getElementById(String(menuid).concat("_",setid)).style.left = "0px";
	document.getElementById(String(menuid).concat("_",setid)).style.top = String(ypos*20).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).className = "menuButtonStyle";
	document.getElementById(String(menuid).concat("_",setid)).onmouseover = function(){
		hoverable(String(menuid).concat("_",setid));
		if (document.getElementById(currSub) != null) {
			if (isSub == "false") {
				closeSubMenu(currSub,currSet);
			};
		};
		//currSub = String(menuid).concat("_",setid,"_sub");
		//currSet = setid;
	};
	document.getElementById(String(menuid).concat("_",setid)).onmousedown = function(){clickHandle(setid, menuid, mode, link)};
}

function createGrayButton(width, text, setid, menuid, position, xpos, ypos, mode, link, isSub){
	//String(text).concat("back");
	menuObj = document.createElement("button");
	menuObj.id = String(menuid).concat("_",setid);
	textnode = document.createTextNode(text);
	menuObj.appendChild(textnode);
	elementThing = document.getElementById(menuid);
	elementThing.appendChild(menuObj);

	document.getElementById(String(menuid).concat("_",setid)).style.width = String(width).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).style.height = "20px";
	document.getElementById(String(menuid).concat("_",setid)).style.margin = "auto";
	document.getElementById(String(menuid).concat("_",setid)).style.textAlign = "left";
	document.getElementById(String(menuid).concat("_",setid)).style.display = "none";
	document.getElementById(String(menuid).concat("_",setid)).style.fontWeight = "700";
	document.getElementById(String(menuid).concat("_",setid)).style.position = position;
	document.getElementById(String(menuid).concat("_",setid)).style.left = "0px";
	document.getElementById(String(menuid).concat("_",setid)).style.top = String(ypos*20).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).className = "menuButtonStyleDisable";
	document.getElementById(String(menuid).concat("_",setid)).onmouseover = function(){
		if (document.getElementById(currSub) != null) {
			if (isSub == "false") {
				closeSubMenu(currSub,currSet);
			};
		};
		//currSub = String(menuid).concat("_",setid,"_sub");
		//currSet = setid;
	};
}

function createSubOpenButton(width, text, setid, menuid, position, xpos, ypos, mode, link){
	//String(text).concat("back");
	menuObj = document.createElement("button");
	menuObj.id = String(menuid).concat("_",setid);
	textnode = document.createTextNode(text);
	menuObj.appendChild(textnode);
	elementThing = document.getElementById(menuid);
	elementThing.appendChild(menuObj);

	document.getElementById(String(menuid).concat("_",setid)).style.width = String(width).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).style.height = "20px";
	document.getElementById(String(menuid).concat("_",setid)).style.margin = "auto";
	document.getElementById(String(menuid).concat("_",setid)).style.textAlign = "left";
	document.getElementById(String(menuid).concat("_",setid)).style.display = "none";
	document.getElementById(String(menuid).concat("_",setid)).style.fontWeight = "700";
	document.getElementById(String(menuid).concat("_",setid)).style.position = position;
	document.getElementById(String(menuid).concat("_",setid)).style.left = "0px";
	document.getElementById(String(menuid).concat("_",setid)).style.top = String(ypos*20).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).className = "menuButtonStyle";
	document.getElementById(String(menuid).concat("_",setid)).onmouseover = function(){hoverable(String(menuid).concat("_",setid))};
	document.getElementById(String(menuid).concat("_",setid)).onmousedown = function(){clickHandle(setid, menuid, mode, link);};
}

//			width, text, setid, depth, direction, position, xpos, ypos


function createSubMenu(width, text, setid, menuid, depth, position, xpos, ypos, mode, link, direc, mposition, mxpos, mypos){
	//String(text).concat("back");
	menuObj = document.createElement("button");
	menuObj.id = String(menuid).concat("_",setid);
	textnode = document.createTextNode(text);
	menuObj.appendChild(textnode);
	elementThing = document.getElementById(menuid);
	elementThing.appendChild(menuObj);

//String(width).concat("px");

	document.getElementById(String(menuid).concat("_",setid)).style.width = document.getElementById(String(menuid).concat("_Mainbutton")).style.width;
	document.getElementById(String(menuid).concat("_",setid)).style.height = "20px";
	document.getElementById(String(menuid).concat("_",setid)).style.margin = "auto";
	document.getElementById(String(menuid).concat("_",setid)).style.textAlign = "left";
	document.getElementById(String(menuid).concat("_",setid)).style.display = "none";
	document.getElementById(String(menuid).concat("_",setid)).style.fontWeight = "700";
	document.getElementById(String(menuid).concat("_",setid)).style.position = position;
	document.getElementById(String(menuid).concat("_",setid)).style.left = "0px";
	document.getElementById(String(menuid).concat("_",setid)).style.top = String(ypos*20).concat("px");
	document.getElementById(String(menuid).concat("_",setid)).className = "menuButtonStyle";

	if (mode == "link") {
		document.getElementById(String(menuid).concat("_",setid)).onmousedown = function(){
			clickHandle(setid, menuid, mode, link);
		};
	} else if (mode == "extlink") {
		document.getElementById(String(menuid).concat("_",setid)).onmousedown = function(){
			clickHandle(setid, menuid, mode, link);
		};
	} else if (mode == "procrastinate") {
		document.getElementById(String(menuid).concat("_",setid)).onmousedown = function(){
			clickHandle(setid, menuid, mode, link);
		};
	}

	menuObj = document.createElement("div");
	menuObj.id = String(menuid).concat("_",setid,"_sub");
	//var textnode = document.createTextNode(text);
	//menuObj.appendChild(textnode);
	elementThing = document.getElementById(String(menuid));
	elementThing.appendChild(menuObj);

	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.backgroundColor = "#aaaaaa";
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.color = "#000000";
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.width = String(width).concat("px");
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.height = String(depth).concat("px");
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.position = mposition;
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.left = String(mxpos).concat("px");
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.top = String(mypos).concat("px");
	document.getElementById(String(menuid).concat("_",setid,"_sub")).style.display = "none";
	document.getElementById(String(menuid).concat("_",setid,"_sub")).onmouseleave = function(){closeSubMenu(menuid,setid);};

	document.getElementById(String(menuid).concat("_",setid)).onmouseover = function(){
		hoverable(String(menuid).concat("_",setid)); 
		if (currSub != String(menuid).concat("_",setid,"_sub")) {
			if (document.getElementById(currSub) != null) {
				closeSubMenu(currSub,currSet);
			};
			currSub = menuid;
			currSet = setid;
		}
		openSubMenu(menuid,setid);
	};

	menuObj = document.createElementNS("http://www.w3.org/2000/svg","svg");
	menuObj.id = String(menuid).concat("_",setid,"_sub_arrow");
	menuObj.setAttributeNS(null,"width", "20");
	menuObj.setAttributeNS(null,"height", "20");
	if (direc == "left") {
		menuObj.setAttributeNS(null,"style", "position: absolute; top: 0px; left: 0px");
	} else {
		menuObj.setAttributeNS(null,"style", "position: absolute; top: 0px; right: 0px");
	}
//	menuObj.setAttributeNS(null,"version", "1.1");
//	menuObj.setAttributeNS(null,"xmlns", "http://www.w3.org/2000/svg");
	elementThing = document.getElementById(String(menuid).concat("_",setid));
//	elementThing = document.body;
	elementThing.appendChild(menuObj);

	menuObj = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	menuObj.id = String(menuid).concat("_",setid,"_sub_arrow_line");
	if (direc == "left") {
		menuObj.setAttributeNS(null, "points", "12 6 6 10 12 14");
		menuObj.setAttributeNS(null, "fill", "black");
		menuObj.setAttributeNS(null, "stroke", "black");
		menuObj.setAttributeNS(null, "stroke-width", "2");
		menuObj.setAttributeNS(null, "fill-rule", "nonzero");
	} else {
		menuObj.setAttributeNS(null, "points", "8 6 14 10 8 14");
		menuObj.setAttributeNS(null, "fill", "black");
		menuObj.setAttributeNS(null, "stroke", "black");
		menuObj.setAttributeNS(null, "stroke-width", "2");
		menuObj.setAttributeNS(null, "fill-rule", "nonzero");
	}
	elementThing = document.getElementById(String(menuid).concat("_",setid,"_sub_arrow"));
	elementThing.appendChild(menuObj);

//	document.getElementById(String(menuid).concat("_",setid)).onmouseleave = function(){closeSubMenu(menuid,setid)};
}

function createAlert(){
	menuObj = document.createElement("div");
	menuObj.id = "pme_errorbox_container1";
	elementThing = document.body;
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "pme_errorbox_container2";
	elementThing = document.getElementById("pme_errorbox_container1");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "pme_errorbox_container3";
	elementThing = document.getElementById("pme_errorbox_container2");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "pme_errorbox_container";
	elementThing = document.getElementById("pme_errorbox_container3");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("p");
	menuObj.id = "pme_errorbox_text";
	elementThing = document.getElementById("pme_errorbox_container");
	elementThing.appendChild(menuObj);
	document.getElementById("pme_errorbox_text").innerHTML = "Ratio.";

	menuObj = document.createElement("div");
	menuObj.id = "pme_errorbox_iconcontainer";
	elementThing = document.getElementById("pme_errorbox_container");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("img");
	menuObj.id = "pme_errorbox_icon";
	elementThing = document.getElementById("pme_errorbox_iconcontainer");
	elementThing.appendChild(menuObj);
	document.getElementById("pme_errorbox_icon").src = "asset/shared/error_icon.svg";

	menuObj = document.createElement("button");
	menuObj.id = "pme_errorbox_buttonm";
	menuObj.className = "pme_errorbox_buttonmain";
	elementThing = document.getElementById("pme_errorbox_container");
	elementThing.appendChild(menuObj);

	document.getElementById("pme_errorbox_buttonm").addEventListener("click", function(){
		window.console.log(pme_error_btnm_targ);
	});

	menuObj = document.createElement("p");
	menuObj.id = "pme_errorbox_buttonmt";
	menuObj.innerHTML = "error";
	menuObj.className = "pme_errorbox_buttonmaint";
	elementThing = document.getElementById("pme_errorbox_buttonm");
	elementThing.appendChild(menuObj);


	menuObj = document.createElement("button");
	menuObj.id = "pme_errorbox_button2";
	menuObj.className = "pme_errorbox_button2";
	elementThing = document.getElementById("pme_errorbox_container");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("button");
	menuObj.id = "pme_errorbox_button3";
	menuObj.className = "pme_errorbox_button3";
	elementThing = document.getElementById("pme_errorbox_container");
	elementThing.appendChild(menuObj);

	document.getElementById("pme_errorbox_container1").style.display = "none";
}

function setAlert(maintext, type, input1, input2){
	document.getElementById("pme_errorbox_text").style.innerHTML = maintext;

	switch(type){
		default:
			document.getElementById("pme_errorbox_text").innerHTML = "An error occured with a type value.";
			pme_error_btnm_targ = "close";
			document.getElementById("pme_errorbox_buttonmt").innerHTML = "OK";
			document.getElementById("pme_errorbox_button2").style.display = "none";
			document.getElementById("pme_errorbox_button3").style.display = "none";
	}

	document.getElementById("pme_errorbox_container1").style.display = "initial";
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj.name);
	xmlobj = myObj;

//	xmlobj["contents"][0];
};
xmlhttp.open("GET", "asset/shared/menuservice/menucontent.json");
xmlhttp.send();

document.title = "tlw" + window.location.pathname;