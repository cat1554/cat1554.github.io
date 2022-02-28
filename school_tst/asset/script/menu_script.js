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
		case "test_link":
			document.querySelector('body').style.opacity = 0;
			setTimeout(function() { 
				window.location.href = link;
			}, 500)
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

document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector('body').style.opacity = 1;
})