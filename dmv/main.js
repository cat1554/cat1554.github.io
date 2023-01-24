var searched = "";
var output = "";

function profanitycheck(txt) {
	window.console.debug(txt);

//	Hitler references
	if (txt.search("18") != -1) {output = "18, hitler reference"; return false;};
	if (txt.search("88") != -1) {output = "88, hitler reference"; return false;};

//	Religious references
	if (txt.search("666") != -1) {output = "666, religious reference"; return false;};
	if (txt.search("hel") != -1) {output = "hell, religious reference"; return false;};

//	Gang references
	if (txt.search("14") != -1) {output = "14, gang reference"; return false;};
	if (txt.search("og") != -1) {output = "og, gang reference"; return false;};
	if (txt.search("blue") != -1) {output = "blue, gang reference"; return false;};
	if (txt.search("red") != -1) {output = "red, gang reference"; return false;};
	if (txt.search("gang") != -1) {output = "gang"; return false;};

//	Violent speech
	if (txt.search("fy") != -1) {output = "fy, fuck you"; return false;};
	if (txt.search("fu") != -1) {output = "fu, fuck you"; return false;};
	if (txt.search("ftw") != -1) {output = "ftw"; return false;};
	if (txt.search("slay") != -1) {output = "slay"; return false;};
	if (txt.search("kil") != -1) {output = "kill"; return false;};
	if (txt.search("evl") != -1) {output = "evil, may be found offensive"; return false;};
	if (txt.search("evil") != -1) {output = "evil, may be found offensive"; return false;};
	if (txt.search("ded") != -1) {output = "dead"; return false;};
	if (txt.search("dead") != -1) {output = "dead"; return false;};
	if (txt.search("ratio") != -1) {output = "ratio"; return false;};
	if (txt.search("hate") != -1) {output = "hate"; return false;};
	if (txt.search("h8") != -1) {output = "h8, hate"; return false;};

//	Sexual connotations
	if (txt.search("wet") != -1) {output = "wet"; return false;};
	if (txt.search("69") != -1) {output = "69, sexual reference"; return false;};
	if (txt.search("love") != -1) {output = "love"; return false;};
	if (txt.search("lv") != -1) {output = "lv, love"; return false;};
	if (txt.search("lvr") != -1) {output = "lvr, lover"; return false;};
	if (txt.search("kitty") != -1) {output = "kitty cat"; return false;};
	if (txt.search("taco") != -1) {output = "taco"; return false;};
	if (txt.search("tutu") != -1) {output = "tutu=slang for vagina"; return false;};
	if (txt.search("balls") != -1) {output = "balls"; return false;};
	if (txt.search("bals") != -1) {output = "balls"; return false;};
	if (txt.search("prn") != -1) {output = "prn = porn"; return false;};
	if (txt.search("dirty") != -1) {output = "dirty"; return false;};
	if (txt.search("drty") != -1) {output = "dirty"; return false;};
	if (txt.search("mch") != -1) {output = "mch, mechaphilia"; return false;};
	if (txt.search("mech") != -1) {output = "mech, mechaphilia"; return false;};
	if (txt.search("qq") != -1) {output = "\"qq\", looks like nipples"; return false;};
	if (txt.search("oo") != -1) {output = "\"oo\", looks like nipples"; return false;};
	if (txt.search("clit") != -1) {output = "clit, sexual reference"; return false;};
	if (txt.search("cum") != -1) {output = "cum, sexual reference"; return false;};
	if (txt.search("penis") != -1) {output = "penis, sexual reference"; return false;};
	if (txt.search("dick") != -1) {output = "dick, sexual reference"; return false;};
	if (txt.search("dik") != -1) {output = "dick, sexual reference or insult"; return false;};
	if (txt.search("sex") != -1) {output = "sexual reference"; return false;};

//	Racial connotations
	if (txt.search("oreo") != -1) {output = "oreo can be racially offensive, black on the outside, white on the inside"; return false;};

//	Profanity
	if (txt.search("af") != -1) {output = "as fuck"; return false;};
	if (txt.search("fk") != -1) {output = "fuck"; return false;};
	if (txt.search("fuk") != -1) {output = "fuck"; return false;};
	if (txt.search("bstd") != -1) {output = "bstd, bastard"; return false;};
	if (txt.search("sht") != -1) {output = "shit"; return false;};
	if (txt.search("shit") != -1) {output = "shit"; return false;};
	if (txt.search("cnt") != -1) {output = "cunt"; return false;};
	if (txt.search("cunt") != -1) {output = "cunt"; return false;};
	if (txt.search("ass") != -1) {output = "ass"; return false;};

//	Funny - Ace Attorney
	if (txt.search("boat") != -1) {output = "boat, haemorrhoids reference"; return false;};
	if (txt.search("dl-6") != -1) {output = "DL-6 reference"; return false;};
	if (txt.search("dl6") != -1) {output = "DL-6 reference"; return false;};
	if (txt.search("elev") != -1) {output = "elev, DL-6 reference"; return false;};
	if (txt.search("yanni") != -1) {output = "yanni, DL-6 reference"; return false;};
	if (txt.search("yogi") != -1) {output = "yogi, DL-6 reference"; return false;};
	if (txt.search("mvk") != -1) {output = "manfred von karma"; return false;};
	if (txt.search("von") != -1) {output = "von karma"; return false;};
	if (txt.search("karma") != -1) {output = "von karma"; return false;};

//	Funny - Programming
	if (txt.search("rm") != -1) {output = "rm, removal command"; return false;};
	if (txt.search("sudo") != -1) {output = "You do not have permission to use \"sudo\". Contact your system administrator for help."; return false;};

//	Bad characters
//	if (txt.search("-") != -1) {output = "invalid character"; return false;};

//	Pass
	return true;
}

function tonumbers(txt) {
	var txt1 = txt.replaceAll("o", 0);
	var txt2 = txt1.replaceAll("l", 1);
	txt1 = txt2.replaceAll("d", 0);
	txt2 = txt1.replaceAll("e", 3);
	txt1 = txt2.replaceAll("i", 1);
	txt2 = txt1.replaceAll("q", 0);
	txt1 = txt2.replaceAll("s", 5);
	txt2 = txt1.replaceAll("b", 8);
	txt1 = txt2.replaceAll("o", 0);
	window.console.debug(txt1);
	return txt1;
}

function toletters(txt) {
	var txt1 = txt.replaceAll(0, "o");
	var txt2 = txt1.replaceAll(1, "i");
	txt1 = txt2.replaceAll(3, "e");
	txt2 = txt1.replaceAll(5, "s");
	txt1 = txt2.replaceAll(8, "b");
	window.console.debug(txt1);
	return txt1;
}

function submitdmv() {
	if (document.getElementById("email").validity.valid == false) {
		output = "Enter a valid email.";
		return false;
	}
	if (document.getElementById("plate").validity.valid == false) {
		output = "Enter a valid plate.";
		return false;
	}
	var pfc = profanitycheck(document.getElementById("plate").value.toLowerCase());
	if (pfc == false) {
		return false;
	}
//	Second time, letters to numbers
	pfc = profanitycheck(tonumbers(document.getElementById("plate").value.toLowerCase()));
	if (pfc == false) {
		output += " (letter as number)"
		return false;
	}
//	Third time, numbers to letters
	pfc = profanitycheck(toletters(document.getElementById("plate").value.toLowerCase()));
	if (pfc == false) {
		output += " (number as letter)"
		return false;
	}
//	window.location.search.split("&");
	return true;
}

function coredmv() {
	output = "Email with final approval will arrive in 6 to 8 weeks.";
	var res = submitdmv();

	document.getElementById("dmv_output").innerHTML = output.toUpperCase();
	if (res == true) {
		document.getElementById("dmv_state").style.color = "#080";
		document.getElementById("dmv_state").innerHTML = "<b>SUBMITTED</b>";
		document.getElementById("dmv_output").style.color = "#080";
	} else {
		document.getElementById("dmv_state").style.color = "#F00";
		document.getElementById("dmv_state").innerHTML = "<b>DENIED</b>";
		document.getElementById("dmv_output").style.color = "#F00";
	}
}