var d = new Date();

var menuopen = "nope";

var wkd = d.getDay();
var yea = d.getFullYear();
var mon = d.getMonth();
var day = d.getDate();
var hou = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

var wkdst = "";
var yeast = "";
var monst = "";
var dayst = "";
var houst = "";
var minst = "";
var secst = "";

var errchk = 0;

var spinCooldown = 0;

var moonamee = "Placehold";

var tprse;

var linkLankLonk;

///////////////////////////////////////////////

function updateItems(a, b) {
	document.getElementById("ic" + a).innerHTML = document.getElementById("ic" + b).innerHTML;
}
function changeLink() {
	window.console.log(document.getElementById("bass").href + "/.." + linkLankLonk)
	window.location.assign(document.getElementById("bass").href + "/.." + linkLankLonk + "/index.html")
//	window.location.assign(document.getElementById("bass").href + linkLankLonk);
}

function handleNav() {
	if (spinCooldown == 0){
		spinCooldown = 1;
		document.getElementById("bta0").style.animationName = "selFlash";
		setTimeout(changeLink, 500);
	}
}

function labeler1(){
	document.getElementById("clockAA").style.left = "0%";
	document.getElementById("clockAB").style.left = "25%";
	document.getElementById("clockAB").style.right = "0%";
	document.getElementById("clockAC").style.right = "-75%";
}

function labeler2(){
	document.getElementById("clockAA").style.left = "-75%";
	document.getElementById("clockAB").style.left = "0%";
	document.getElementById("clockAB").style.right = "0%";
	document.getElementById("clockAC").style.right = "-75%";
}

function labeler3(){
	document.getElementById("clockAA").style.left = "-75%";
	document.getElementById("clockAB").style.left = "-25%";
	document.getElementById("clockAB").style.right = "25%";
	document.getElementById("clockAC").style.right = "0%";
}

function closeTheMenu2(){
	menuopen = "nope";
	document.body.style.overflow = "scroll";

	document.body.style.scrollBehavior = "smooth";
	document.documentElement.style.scrollBehavior = "smooth";

	document.getElementById("clockholder").style.scrollBehavior = "auto";
	document.getElementById("clockholder").scrollTop = 36;
}

function closeTheMenu(){
	labeler2();
	document.getElementById("clockholder").style.scrollBehavior = "smooth";
	document.getElementById("clockholder").scrollTop = 36;
	
	setTimeout(closeTheMenu2, 250);
}

function openTheMenu2(){
	document.body.style.scrollBehavior = "auto";
	document.documentElement.style.scrollBehavior = "auto";

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	document.getElementById("clockholder").style.scrollBehavior = "smooth";
	document.getElementById("clockholder").scrollTop = 20;
	document.body.style.overflow = "hidden";
}

function openTheMenu(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	menuopen = "yep";
	setTimeout(openTheMenu2, 100);
}

function move2(){
	spinCooldown = 0;
	document.getElementById("lr").style.transition =  "";
	document.getElementById("lr").style.transform = "rotateY(0deg)";

	tprse = JSON.parse(document.getElementById("ic1").innerHTML);
	if (tprse.shn == 1) {
		moonamee = tprse.num + " - " + tprse.msg;
	} else {
		moonamee = tprse.msg;
	}
	linkLankLonk = tprse.lnk;
	document.getElementById("bta0").style.backgroundImage = "url('asset/icn/" + tprse.img + ".gif')";

	tprse = JSON.parse(document.getElementById("ic2").innerHTML);
	document.getElementById("btp1").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic3").innerHTML);
	document.getElementById("btp2").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic4").innerHTML);
	document.getElementById("btp3").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic5").innerHTML);
	document.getElementById("btp4").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic15").innerHTML);
	document.getElementById("btn1").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic14").innerHTML);
	document.getElementById("btn2").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic13").innerHTML);
	document.getElementById("btn3").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";

	tprse = JSON.parse(document.getElementById("ic12").innerHTML);
	document.getElementById("btn4").style.backgroundImage = "url('asset/icn/" + tprse.img + ".png')";
}

function moveLeft2(){
	updateItems(0,1);
	updateItems(1,2);
	updateItems(2,3);
	updateItems(3,4);
	updateItems(4,5);
	updateItems(5,6);
	updateItems(6,7);
	updateItems(7,8);
	updateItems(8,9);
	updateItems(9,10);
	updateItems(10,11);
	updateItems(11,12);
	updateItems(12,13);
	updateItems(13,14);
	updateItems(14,15);
	updateItems(15,0);
	move2()
}

function moveRight2(){
	updateItems(0,15);
	updateItems(15,14);
	updateItems(14,13);
	updateItems(13,12);
	updateItems(12,11);
	updateItems(11,10);
	updateItems(10,9);
	updateItems(9,8);
	updateItems(8,7);
	updateItems(7,6);
	updateItems(6,5);
	updateItems(5,4);
	updateItems(4,3);
	updateItems(3,2);
	updateItems(2,1);
	updateItems(1,0);
	move2()
}

function moveLeft(){
	if (spinCooldown == 0){
		spinCooldown = 1;
		document.getElementById("lr").style.transition =  "all .1s ease-in-out";
		document.getElementById("lr").style.transform = "rotateY(-25deg)";
		setTimeout(moveLeft2, 100);
	}
}

function moveRight(){
	if (spinCooldown == 0){
		spinCooldown = 1;
		document.getElementById("lr").style.transition =  "all .1s ease-in-out";
		document.getElementById("lr").style.transform = "rotateY(20.5deg)";
		setTimeout(moveRight2, 100);
	}
}

function clockDo(){
	d = new Date();

	wkd = d.getDay();
	yea = d.getFullYear();
	mon = d.getMonth();
	day = d.getDate();
	hou = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();

	wkdst = "";
	yeast = "";
	monst = "";
	dayst = "";
	houst = "";
	minst = "";
	secst = "";

	switch(wkd) {
		case 0:
			wkdst = "Sun";
			break;
		case 1:
			wkdst = "Mon";
			break;
		case 2:
			wkdst = "Tue";
			break;
		case 3:
			wkdst = "Wed";
			break;
		case 4:
			wkdst = "Thu";
			break;
		case 5:
			wkdst = "Fri";
			break;
		case 6:
			wkdst = "Sat";
			break;
		case 7:
			wkdst = "EEE";
			break;
		default:
			wkdst = "EEE";
	} 

	switch(mon) {
		case 0:
			monst = "Jan";
			break;
		case 1:
			monst = "Feb";
			break;
		case 2:
			monst = "Mar";
			break;
		case 3:
			monst = "Apr";
			break;
		case 4:
			monst = "May";
			break;
		case 5:
			monst = "Jun";
			break;
		case 6:
			monst = "Jul";
			break;
		case 7:
			monst = "Aug";
			break;
		case 8:
			monst = "Sep";
			break;
		case 9:
			monst = "Oct";
			break;
		case 10:
			monst = "Nov";
			break;
		case 11:
			monst = "Dec";
			break;
		case 12:
			monst = "Sma";
			break;
		default:
			monst = "EEE";
	} 

	if (day < 9.5) {
		dayst = "0" + day;
	} else {
		dayst = day;
	}

	if (hou < 9.5) {
		houst = "0" + hou;
	} else {
		houst = hou;
	}

	if (min < 9.5) {
		minst = "0" + min;
	} else {
		minst = min;
	}

	if (sec < 9.5) {
		secst = "0" + sec;
	} else {
		secst = sec;
	}

	document.getElementById("clockB").innerHTML = wkdst.concat(", ", dayst, " ", monst, ", ", yea, " - ", houst, ":", minst, ":", secst);
	document.getElementById("clockC").innerHTML = houst + ":" + minst + ":" + secst;

	document.getElementById("clockAB").innerHTML = moonamee;
}

function init(){
	document.getElementById("clockholder").scrollTop = 36;

	document.body.style.scrollBehavior = "smooth";
	document.documentElement.style.scrollBehavior = "smooth";

	document.getElementById("ic1").innerHTML = '{"msg":"Top menu", "lnk":"","img":"yosoko","num":0,"shn":0}'
	document.getElementById("ic2").innerHTML = '{"msg":"Morph", "lnk":"/mofu","img":"mofu","num":1,"shn":1}'
	document.getElementById("ic3").innerHTML = '{"msg":"Face", "lnk":"/kao","img":"kao","num":2,"shn":1}'
	document.getElementById("ic4").innerHTML = '{"msg":"Travel", "lnk":"/toraberu","img":"toraberu","num":3,"shn":1}'
	document.getElementById("ic5").innerHTML = '{"msg":"Cartoon", "lnk":"/katoun","img":"katoun","num":4,"shn":1}'
	document.getElementById("ic6").innerHTML = '{"msg":"Pop Art", "lnk":"/poppuato","img":"poppuato","num":5,"shn":1}'
	document.getElementById("ic7").innerHTML = '{"msg":"Word Art", "lnk":"/wadoato","img":"wadoato","num":6,"shn":1}'
	document.getElementById("ic8").innerHTML = '{"msg":"Music Video", "lnk":"/myujikkubideo","img":"myujikkubideo","num":7,"shn":1}'
	document.getElementById("ic9").innerHTML = '{"msg":"Stop Motion", "lnk":"/anime","img":"anime","num":8,"shn":1}'
	document.getElementById("ic10").innerHTML = '{"msg":"Day In Life", "lnk":"/seikatsu","img":"seikatsu","num":9,"shn":1}'
	document.getElementById("ic11").innerHTML = '{"msg":"How To", "lnk":"/doyatte","img":"doyatte","num":10,"shn":1}'
	document.getElementById("ic12").innerHTML = '{"msg":"GarageBand", "lnk":"/garejibando","img":"garejibando","num":11,"shn":1}'
	document.getElementById("ic13").innerHTML = '{"msg":"Page", "lnk":"/uebu","img":"uebu","num":12,"shn":1}'
	document.getElementById("ic14").innerHTML = '{"msg":"Blog", "lnk":"/burogu","img":"burogu","num":13,"shn":0}'
	document.getElementById("ic15").innerHTML = '{"msg":"Contact", "lnk":"/kontakuto","img":"kontakuto","num":14,"shn":0}'
	document.getElementById("ic16").innerHTML = '{"msg":"Error", "lnk":"","img":"fail","num":15,"shn":0}'
	document.getElementById("ic17").innerHTML = '{"msg":"Error", "lnk":"","img":"fail","num":15,"shn":0}'
	document.getElementById("ic0").innerHTML = '{"msg":"Error", "lnk":"","img":"fail","num":15,"shn":0}'

	move2();


	setInterval(clockDo, 50);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	button1 = document.getElementById("myBtnA");
	button2 = document.getElementById("myBtnB");
	button3 = document.getElementById("menuBottom");
	button4 = document.getElementById("clockholder");

	var opc = ((document.documentElement.scrollTop - 100) / 50);
	var scr = ((document.documentElement.scrollTop - 100));

	var scrk = (( (document.documentElement.scrollTop - 100) / 2) + 36);

	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		button1.style.display = "block";
		button2.style.display = "block";

		button1.style.opacity = opc;
		button2.style.opacity = opc;

		button3.style.position = "fixed";
		button3.style.top = "0px";

		if (scrk > 36) {
			if (scrk < 56) {
				button4.scrollTop = scrk;
			} else {
				button4.scrollTop = 56;
			}
		}

	} else {
		button1.style.display = "none";
		button2.style.display = "none";
		button3.style.position = "absolute";
		button3.style.top = "100px";

		if (menuopen == "nope") {
			button4.scrollTop = 36;
			button4.style.scrollBehavior = "auto";
		}
	}
}

function topFunction() {
	window.location.hash = "menuBlocker";
} 