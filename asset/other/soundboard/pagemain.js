var targetX = 0;
var targetY = 0;
var audioSummonedID = 0;
var audioSummonerID = 0;

var detectdb = "0";

var elm;
var newone;

var counter = 0;

var notificationCache = [];
var notificationClock = 0;
var notificationStatus = 0;
var notificationCountStatus = 0;

var summonMode = 0;
var theme = 1;
var themeTransition = 0;
var currTheme = 1;

var fileSource;

var dvkeymap = [
	"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "[", "]", "Backspace",
	"Tab", "'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "=", "\\",
	"CapsLock", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "Enter",
	"Shift", ";", "q", "j", "k", "x", "b", "m", "w", "v", "z", "Shift"
];

var dvkeymapshifted = [
	"~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "Backspace",
	"Tab", "\"", "<", ">", "P", "Y", "F", "G", "C", "R", "L", "?", "+", "|",
	"CapsLock", "A", "O", "E", "U", "I", "D", "H", "T", "N", "S", "_", "Enter",
	"Shift", ":", "Q", "J", "K", "X", "B", "M", "W", "V", "Z", "Shift"
];

var qwkeymap = [
	"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
	"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
	"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
	"Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"
];

var qwkeymapshifted = [
	"~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
	"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
	"Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Shift"
];

function beginSB() {
	var dbug = ((window.location.search).indexOf("debug=1"));
	var kbrd = ((window.location.search).match(/kbrd=(dv|qw)/i));

	window.console.log(dbug);
	if (kbrd != null) {
		window.console.log(kbrd);
		window.console.log(kbrd["1"]);
	} else {
		window.console.log("No kbrd");
		window.console.log(kbrd);
	}

	document.body.addEventListener("keyup", function(kpush) {
		window.console.log(kpush);
		window.console.log(kpush["key"]);
	});
}