// JavaScript Document

var elm;
var newone;
var textnode;

// For each contents, create a button.

//createMenu(150, "Navigate", "NavMenu", 150, "down", "absolute", 0, 0)

function createMenu(width, text, setid, depth, direction, position, xpos, ypos) {
	var menuObj = document.createElement("div");
	menuObj.id = setid;
	//var textnode = document.createTextNode(text);
	//menuObj.appendChild(textnode);
	var elementThing = document.body;
	elementThing.appendChild(menuObj);

	//document.getElementById(setid).style.backgroundColor = "#AAAAFF";
	//document.getElementById(setid).style.color = "#000000";
	document.getElementById(setid).style.backgroundColor = "#FFFFFF";
	document.getElementById(setid).style.color = "#000000";
	document.getElementById(setid).style.width = String(width).concat("px");
	document.getElementById(setid).style.height = String(depth).concat("px");
	
	elm = document.getElementById(setid);
	newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);

	//String(text).concat("back")
	if (direction == "down") {
		menuObj = document.createElement("button");
		menuObj.id = String(setid).concat("-Mainbutton");
		textnode = document.createTextNode(text);
		menuObj.appendChild(textnode);
		elementThing = document.body;
		elementThing.appendChild(menuObj);

	//document.getElementById(setid).style.backgroundColor = "#AAAAFF";
	//document.getElementById(setid).style.color = "#000000";
		document.getElementById(String(setid).concat("-Mainbutton")).style.backgroundColor = "#FFFFFF";
		document.getElementById(String(setid).concat("-Mainbutton")).style.color = "#000000";
		document.getElementById(String(setid).concat("-Mainbutton")).style.width = String(width).concat("px");
		document.getElementById(String(setid).concat("-Mainbutton")).style.height = "20px";
		
			//<button style="margin: auto; text-align: left; color: black; width: 100px; font-weight: 700; position: absolute; left: 0px; top: 0px; height: 20px" class="txtC" id="eggsM" onmousedown="openMenu()">Special</button>
	}
}