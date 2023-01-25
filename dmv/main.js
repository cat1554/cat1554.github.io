var searched = "";
var output = "";
var pval = "";

function profanitycheck(txt) {
	window.console.debug("checking: " + txt);

//	Limit bullshit
	if (txt.search(/plate/) != -1) {output = "unoriginal"; return false;};
	if (txt.search(/pl8/) != -1) {output = "unoriginal"; return false;};

//	Limit characters
	if (txt.search(/[^a-z0-9\s]/) != -1) {output = "invalid character"; return false;};

//	Funny - Ace Attorney
	if (txt.search(/bo(a?)t/) != -1) {output = "boat, haemorrhoids reference"; return false;};
	if (txt.search(/dl(.*)6/) != -1) {output = "DL-6 reference"; return false;};
	if (txt.search(/el(e?)v/) != -1) {output = "elev, DL-6 reference"; return false;};
	if (txt.search(/y(a*)(n+)i/) != -1) {output = "yanni, DL-6 reference"; return false;};
	if (txt.search(/y(o*)gi/) != -1) {output = "yogi, DL-6 reference"; return false;};
	if (txt.search(/vk/) != -1) {output = "vk, von karma"; return false;};
	if (txt.search(/v(o*)n/) != -1) {output = "von karma"; return false;};
	if (txt.search(/k(a*)(r*)ma/) != -1) {output = "von karma"; return false;};

//	Funny - Programming
	if (txt.search(/sudo/) != -1) {output = "You do not have permission to use \"sudo\".<br>Contact your system administrator for help."; return false;};
	if (txt.search(/rm/) != -1) {output = "rm, removal command"; return false;};

//	Funny - Other
	if (txt.search(/yoyo/) != -1) {output = "no-no"; return false;};

//	Gang references
	if (txt.search(/13/) != -1) {output = "13, gang reference"; return false;};
	if (txt.search(/14/) != -1) {output = "14, gang reference"; return false;};
	if (txt.search(/og/) != -1) {output = "og, gang reference"; return false;};
	if (txt.search(/blue/) != -1) {output = "blue, gang reference"; return false;};
	if (txt.search(/red/) != -1) {output = "red, gang reference"; return false;};
	if (txt.search(/gang/) != -1) {output = "gang"; return false;};

//	Hitler references
	if (txt.search(/18/) != -1) {output = "18, hitler reference"; return false;};
	if (txt.search(/88/) != -1) {output = "88, hitler reference"; return false;};

//	Religious references
	if (txt.search(/666/) != -1) {output = "666, religious reference"; return false;};
	if (txt.search(/hel/) != -1) {output = "hell, religious reference"; return false;};

//	Violent speech
	if (txt.search(/fy/) != -1) {output = "fy, fuck you"; return false;};
	if (txt.search(/fu/) != -1) {output = "fu, fuck you"; return false;};
	if (txt.search(/ftw/) != -1) {output = "ftw"; return false;};
	if (txt.search(/sl(a*)y/) != -1) {output = "slay"; return false;};
	if (txt.search(/k[iy](l+)/) != -1) {output = "kill"; return false;};
	if (txt.search(/ev(i*)l/) != -1) {output = "evil, may be found offensive"; return false;};
	if (txt.search(/de(a*)d/) != -1) {output = "dead"; return false;};
	if (txt.search(/r(a*)t(i*)o/) != -1) {output = "ratio"; return false;};
	if (txt.search(/hate/) != -1) {output = "hate"; return false;};
	if (txt.search(/h8/) != -1) {output = "h8, hate"; return false;};
	if (txt.search(/no/) != -1) {output = "no, hostile"; return false;};
	if (txt.search(/u/) != -1) {output = "u, hostile"; return false;};

//	Sexual connotations
	if (txt.search(/wet/) != -1) {output = "wet"; return false;};
	if (txt.search(/69/) != -1) {output = "69, sexual reference"; return false;};
	if (txt.search(/(l+)(o*)(v+)(e*)(r+)/) != -1) {output = "lover"; return false;};
	if (txt.search(/(l+)(o*)(v+)(e*)/) != -1) {output = "love"; return false;};
	if (txt.search(/(k+)(i*)(t+)(y+)/) != -1) {output = "kitty cat"; return false;};
	if (txt.search(/(t+)(a*)([ck]+)(o+)/) != -1) {output = "taco"; return false;};
	if (txt.search(/tutu/) != -1) {output = "tutu=slang for vagina"; return false;};
	if (txt.search(/ba(l+)s/) != -1) {output = "balls"; return false;};
	if (txt.search(/p(o*)rn/) != -1) {output = "porn"; return false;};
	if (txt.search(/d(i*)rty/) != -1) {output = "dirty"; return false;};
	if (txt.search(/m(e*)ch/) != -1) {output = "mech, mechaphilia"; return false;};
	if (txt.search(/qq/) != -1) {output = "\"qq\", looks like nipples"; return false;};
	if (txt.search(/oo/) != -1) {output = "\"oo\", looks like nipples"; return false;};
	if (txt.search(/cl(i*)t/) != -1) {output = "clit, sexual reference"; return false;};
	if (txt.search(/c(u*)m/) != -1) {output = "cum, sexual reference"; return false;};
	if (txt.search(/p(e*)n(i*)s/) != -1) {output = "penis, sexual reference"; return false;};
	if (txt.search(/di(c*)k/) != -1) {output = "dick, sexual reference or insult"; return false;};
	if (txt.search(/s(e*)x/) != -1) {output = "sexual reference"; return false;};

//	Racial connotations
	if (txt.search(/or(e*)o/) != -1) {output = "oreo can be racially offensive, black on the outside,<br>white on the inside"; return false;};
	if (txt.search(/kkk/) != -1) {output = "kkk, racially offensive"; return false;};

//	Profanity
	if (txt.search(/h(e?)(c?)k/) != -1) {output = "heck"; return false;};
	if (txt.search(/h(e?)(c?)k/) != -1) {output = "darn"; return false;};
	if (txt.search(/d(a|m)n/) != -1) {output = "damn"; return false;};
	if (txt.search(/cr(a?)p/) != -1) {output = "crap"; return false;};
//	if (txt.search(/h(e?)(c?)k/) != -1) {output = "heck"; return false;};
//	if (txt.search(/h(e?)(c?)k/) != -1) {output = "heck"; return false;};
	if (txt.search(/f/) != -1) {output = "f, fuck"; return false;};
	if (txt.search(/bstd/) != -1) {output = "bstd, bastard"; return false;};
	if (txt.search(/sh(i*)t/) != -1) {output = "shit"; return false;};
	if (txt.search(/c(u*)nt/) != -1) {output = "cunt"; return false;};
	if (txt.search(/as/) != -1) {output = "ass"; return false;};

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
	window.console.debug("as numbers: " + txt1);
	return txt1;
}

function toletters(txt) {
	var txt1 = txt.replaceAll(0, "o");
	var txt2 = txt1.replaceAll(1, "i");
	txt1 = txt2.replaceAll(3, "e");
	txt2 = txt1.replaceAll(5, "s");
	txt1 = txt2.replaceAll(8, "b");
	window.console.debug("as letters: " + txt1);
	return txt1;
}

function submitdmv() {
/*	if (document.getElementById("email").validity.valid == false) {
		output = "Enter a valid email";
		return false;
	} */
	if (document.getElementById("plate").validity.valid == false) {
		output = "Enter a valid plate";
		return false;
	}
	pval = document.getElementById("plate").value.toLowerCase();

//	Checking time!

//	First profanity pass
	var pfc = profanitycheck(pval);
	if (pfc == false) {
		return false;
	}
//	Second time, letters to numbers
	pfc = profanitycheck(tonumbers(pval));
	if (pfc == false) {
		output += " (letter as number)"
		return false;
	}
//	Third time, numbers to letters
	pfc = profanitycheck(toletters(pval));
	if (pfc == false) {
		output += " (number as letter)"
		return false;
	}

//	Run checks on the formatting
	if (pval.length < 3.5) {
		output = "Plate lengths under 4 characters are reserved";
		return false;
	}
	if (pval.search(/([a-z]{2})(\s*)(\d{5})/) != -1) {
		output = "reserved plate format (aa xxxxx)";
		return false;
	}
	if (pval.search(/([a-z]{3})(\s*)(\d{4})/) != -1) {
		output = "reserved plate format (aaa xxxx)";
		return false;
	}
	if (pval.search(/\b[\w]\b/) != -1) {
		output = "stand alone character";
		return false;
	};
	if ([...pval.matchAll(/(g)/g)].length > [...pval.matchAll(/(h)/g)].length) {
		if ([...pval.matchAll(/(g)/g)].length > 0) {
			output = "too much g";
			return false;
		}
	};

//	window.location.search.split("&");
	return true;
}

function coredmv() {
	output = "Email with final approval will arrive in 6 to 8 weeks";
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

function setup() {
	document.getElementById("platenum").innerHTML = document.getElementById("plate").value.toUpperCase();

	document.getElementById("plate").addEventListener("input", function(e){
		document.getElementById("platenum").innerHTML = document.getElementById("plate").value.toUpperCase();
	});
}