var pageContent;

var xmlobj;

var replace_a;
var replace_b;
var replace_c;
var replace_d;

var loop1;
var loop2;
var loop3;
var loop4;
var loop5;
var loop6;
var loop7;
var loop8;

var errorCache = [];
var notifCache = [];

function press(){
}

function hovered(){
}

function createButton(){
}

function createSubMenu(){
}

function createMenu(){
}

function editMessage(){
}

function createMessage(){
}

function buildMenu(xml) {
	// Top button
	window.console.log(xml);
}

function initMenu(xml) {
//	Main frame
	window.console.log(xml);

	replace_a = document.createElement("div");
	replace_a.id = "menubox_" + xml.id;
	replace_a.className = "menubox";
	replace_a.style.position = "absolute";
	replace_a.style.top = xml.y + "px";
	replace_a.style.left = xml.x + "px";
	replace_a.style.width = xml.width + "px";
	replace_a.style.height = ((xml.depth * 20) + 20) + "px";

	elementThing = document.body;
	elementThing.appendChild(replace_a);

	replace_b = document.createElement("button");
	replace_b.id = "menubox_" + xml.id + "_opener";
	replace_b.className = "menuopenbutton";
	replace_b.innerHTML = xml.title;
	elementThing = document.getElementById("menubox_" + xml.id);
	elementThing.appendChild(replace_b);

	replace_c = document.createElement("div");
	replace_c.id = "menubox_" + xml.id + "_container";
	replace_c.className = "menucont";
	replace_c.style.position = "absolute";
	replace_c.style.top = "20px";
	replace_c.style.bottom = "0px";
	replace_c.style.left = "0px";
	replace_c.style.width = "100%";
	elementThing = document.getElementById("menubox_" + xml.id);
	elementThing.appendChild(replace_c);

//	for (let menusLoop = 0; menusLoop < xml.menuContents.length; menusLoop++) {
//		buildMenu(xml.menuContents[menusLoop]);
//	}
}

function parseMenu(xml) {
	for (let menusTopLoop = 0; menusTopLoop < xml.contents.length; menusTopLoop++) {
		initMenu(xml.contents[menusTopLoop]);
	}
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj);
	xmlobj = myObj;
	parseMenu(myObj);

//	xmlobj["contents"][0];
};

function initPage() {
	pageContent = document.body.innerHTML;
	document.body.innerHTML = "";

	replace_a = document.createElement("div");
	replace_a.id = "pageglobal_headbar";
	elementThing = document.body;
	elementThing.appendChild(replace_a);

	replace_a = document.createElement("div");
	replace_a.id = "pageglobal_contentframe";
	elementThing = document.body;
	elementThing.appendChild(replace_a);

//	replace_b = document.createElement("div");
//	replace_b.id = "pageglobal_contentbuffer1";
//	elementThing = replace_a;
//	elementThing.appendChild(replace_b);

//	replace_b = document.createElement("div");
//	replace_b.id = "pageglobal_contentbuffer2";
//	elementThing = replace_a;
//	elementThing.appendChild(replace_b);

	replace_b = document.createElement("div");
	replace_b.id = "pageglobal_content";
	elementThing = replace_a;
	elementThing.appendChild(replace_b);

	replace_b.innerHTML = pageContent;

	document.title = "tlw" + window.location.pathname;

	xmlhttp.open("GET", "asset/shared/menuservice/menucontent.json");
	xmlhttp.send();
}