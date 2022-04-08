// JavaScript Document

var elm;
var newone;
var textnode;
var menuObj;
var elementThing;
var currSub;
var currSet;
var mySvg = "http://www.w3.org/2000/svg";

// For each contents, create a button.

//createMenu(150, "Navigate", "NavMenu", 150, "down", "absolute", 0, 0)

menuObj = document.createElement("div");
menuObj.id = "hvrHold";
elementThing = document.head;
elementThing.appendChild(menuObj);

function runBannerSystem() {
	$.getJSON("asset/shared/server.json", 
		function(data) {
			$("#topnavbar_builtinnotification1").html(data.fan);
			$("#topnavbar_builtinnotification2").html(data.temperature_but_its_for_the_americans_instead);
		}
	)
}

function addBackBar() {
	menuObj = document.createElement("div");
	menuObj.id = "topnavbar";
	elementThing = document.body;
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "notification1";
	elementThing = document.getElementById("topnavbar");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("p");
	menuObj.id = "topnavbar_builtinnotification1";
	menuObj.className = "notificationText";
	elementThing = document.getElementById("notification1");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "notification2";
	elementThing = document.getElementById("topnavbar");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("p");
	menuObj.id = "topnavbar_builtinnotification2";
	menuObj.className = "notificationText";
	elementThing = document.getElementById("notification2");
	elementThing.appendChild(menuObj);

	menuObj = document.createElement("div");
	menuObj.id = "bgHider";
	elementThing = document.body;
	elementThing.appendChild(menuObj);

	setInterval(runBannerSystem, 2000);
}

function createMenu(width, text, setid, depth, direction, position, xpos, ypos, showbg) {
	window.console.log("build 1");
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
	document.getElementById(setid).style.zIndex = 512;
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
	menuObj.id = "pme_errorbox";
	elementThing = document.body;
	elementThing.appendChild(menuObj);

	document.getElementById("pme_errorbox").style.position = "fixed";
	document.getElementById("pme_errorbox").style.margin = "auto";
	document.getElementById("pme_errorbox").style.width = "200px";
	document.getElementById("pme_errorbox").style.height = "200px";
	document.getElementById("pme_errorbox").style.backgroundColor = "#cccccc";
}

function setAlert(width, text, setid, menuid, position, xpos, ypos, mode, link, isSub){
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