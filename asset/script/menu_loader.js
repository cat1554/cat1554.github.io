// JavaScript Document

function doLoad(){
//	createAlert()
	createMenu(150, "Navigate", "NavMenu", 5, "down", "fixed", 0, 0, "false")
	createButton(150, "Procrastinate", "procrast", "NavMenu", "absolute", 0, 1, "procrastinate", "", "false")

	createSubMenu(150, "Projects", "game", "NavMenu", 240, "absolute", 0, 2, "sub", "project/", "right", "absolute", 150, 20)
	createGrayButton(150, "Main", "proj", "NavMenu_game_sub", "absolute", 0, 0, "link", "project/", "true")
	createButton(150, "1 - Morph", "morph", "NavMenu_game_sub", "absolute", 0, 1, "link", "project/morph/", "true")
	createButton(150, "2 - Face", "face", "NavMenu_game_sub", "absolute", 0, 2, "link", "project/face/", "true")
	createButton(150, "3 - Travel", "travel", "NavMenu_game_sub", "absolute", 0, 3, "link", "project/travel/", "true")
	createButton(150, "4 - Cartoon", "cartoon", "NavMenu_game_sub", "absolute", 0, 4, "link", "project/cartoon/", "true")
	createButton(150, "5 - Pop Art", "poptart", "NavMenu_game_sub", "absolute", 0, 5, "link", "project/poptart/", "true")
	createButton(150, "6 - Word Art", "wordart", "NavMenu_game_sub", "absolute", 0, 6, "link", "project/word/", "true")
	createButton(150, "7 - Music Video", "musvid", "NavMenu_game_sub", "absolute", 0, 7, "link", "project/musvid/", "true")
	createButton(150, "8 - Stop Motion", "anime", "NavMenu_game_sub", "absolute", 0, 8, "link", "project/anime/", "true")
	createButton(150, "9 - Day In Life", "life", "NavMenu_game_sub", "absolute", 0, 9, "link", "project/life/", "true")
	createButton(150, "10 - How To", "how", "NavMenu_game_sub", "absolute", 0, 10, "link", "project/how/", "true")
	createButton(150, "11 - After Effects", "effect", "NavMenu_game_sub", "absolute", 0, 11, "link", "project/effect/", "true")
	createButton(150, "12 - GarageBand", "garage", "NavMenu_game_sub", "absolute", 0, 12, "link", "project/garage/", "true")
	createButton(150, "13 - Website", "web", "NavMenu_game_sub", "absolute", 0, 13, "link", "", "true")

	createSubMenu(150, "Social", "social", "NavMenu", 40, "absolute", 0, 4, "sub", "", "right", "absolute", 150, 80)

	createButton(150, "Blog", "blog", "NavMenu", "absolute", 0, 3, "link", "blog/", "false")
	createButton(150, "About", "aboot", "NavMenu", "absolute", 0, 4, "link", "aboot/", "false")
	createButton(150, "Contact", "con", "NavMenu", "absolute", 0, 5, "link", "con/", "false")


	createMenu(150, "Navigate", "ContextNavMenu", 5, "down", "fixed", 0, 300, "false")
	createButton(150, "Procrastinate", "procrast", "ContextNavMenu", "absolute", 0, 1, "procrastinate", "", "false")

	createSubMenu(150, "Projects", "game", "ContextNavMenu", 240, "absolute", 0, 2, "sub", "project/", "right", "absolute", 150, 20)
	createGrayButton(150, "Main", "proj", "ContextNavMenu_game_sub", "absolute", 0, 0, "link", "project/", "true")
	createButton(150, "1 - Morph", "morph", "ContextNavMenu_game_sub", "absolute", 0, 1, "link", "project/morph/", "true")
	createButton(150, "2 - Face", "face", "ContextNavMenu_game_sub", "absolute", 0, 2, "link", "project/face/", "true")
	createButton(150, "3 - Travel", "travel", "ContextNavMenu_game_sub", "absolute", 0, 3, "link", "project/travel/", "true")
	createButton(150, "4 - Cartoon", "cartoon", "ContextNavMenu_game_sub", "absolute", 0, 4, "link", "project/cartoon/", "true")
	createButton(150, "5 - Pop Art", "poptart", "ContextNavMenu_game_sub", "absolute", 0, 5, "link", "project/poptart/", "true")
	createButton(150, "7 - Stop Motion", "anime", "ContextNavMenu_game_sub", "absolute", 0, 7, "link", "project/anime/", "true")
	createButton(150, "8 - Day In Life", "life", "ContextNavMenu_game_sub", "absolute", 0, 8, "link", "project/life/", "true")
	createButton(150, "9 - How To", "how", "ContextNavMenu_game_sub", "absolute", 0, 9, "link", "project/how/", "true")
	createButton(150, "10 - GarageBand", "garage", "ContextNavMenu_game_sub", "absolute", 0, 10, "link", "project/garage/", "true")
	createButton(150, "11 - Website", "web", "ContextNavMenu_game_sub", "absolute", 0, 11, "link", "", "true")

	createSubMenu(150, "Social", "social", "ContextNavMenu", 40, "absolute", 0, 4, "sub", "", "right", "absolute", 150, 80)

	createButton(150, "Blog", "blog", "ContextNavMenu", "absolute", 0, 3, "link", "blog/", "false")
	createButton(150, "About", "aboot", "ContextNavMenu", "absolute", 0, 4, "link", "aboot/", "false")
	createButton(150, "Contact", "con", "ContextNavMenu", "absolute", 0, 5, "link", "con/", "false")

	var linkparam = location.search;

	window.console.log(linkparam);

	var paramfind = linkparam.indexOf("music=1");

	window.console.log(paramfind);
	document.getElementById("output6").innerHTML = "06:" + linkparam;
	document.getElementById("output7").innerHTML = "07:" + paramfind;

	setInterval(haoreuch, 10)

}