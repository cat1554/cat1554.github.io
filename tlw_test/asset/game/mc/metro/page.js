var debugMode = 0;
var buttonLock = false;

var pageContent;

var xmlobj;

var replace_a;
var replace_b;
var replace_c;
var replace_d;
var replace_e;
var replace_f;
var replace_h;
var replace_i;
var replace_j;
var replace_k;
var replace_l;

var notreplace_a;
var notreplace_b;
var notreplace_c;
var notreplace_d;
var notreplace_e;
var notreplace_f;

var sys_aud_id_1 = 0;
var sys_aud_id_2 = "0";

var loop1;
var loop2;
var loop3;
var loop4;
var loop5;
var loop6;
var loop7;
var loop8;

/*
var global_mouseLeaver = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});
*/

function mapRenderStep(x, y, z){
	buttonLock == false;
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj);
	xmlobj = myObj;
};

function initPage(){
	const canvas = document.getElementById("train_map");
	const ctx = canvas.getContext("2d");

	xmlhttp.open("GET", "asset/game/mc/metro/systempoints.json");
	xmlhttp.send();
}