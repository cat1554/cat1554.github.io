function pleaseExist() {
	document.getElementById("map_frame").width = document.getElementById("pageglobal_content").clientWidth
	document.getElementById("map_frame").height = document.getElementById("pageglobal_content").clientHeight
}

function initPage2() {
	setInterval(pleaseExist, 10);
}

function initPage() {
	setTimeout(initPage2, 100);
}