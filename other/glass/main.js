var step = 0;

function refreshItem(id) {
	var elm = document.getElementById(id);
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
}

function blar() {
	switch(step){
		case 0:
			document.getElementById("ct2").classList.add("c2");
			refreshItem("ct2");
			setTimeout(blar,1500);
			break;
		case 1:
			document.getElementById("ct3").classList.add("c3");
			refreshItem("ct3");
			setTimeout(blar,1500);
			break;
		case 2:
			document.getElementById("ct4").classList.add("c4");
			refreshItem("ct4");
			setTimeout(blar,1500);
			break;
		case 3:
			document.getElementById("ct5").classList.add("c5");
			refreshItem("ct5");
			setTimeout(blar,1500);
			break;
		case 4:
			document.getElementById("ct6").classList.add("c6");
			refreshItem("ct6");
			setTimeout(blar,1500);
			break;
		case 5:
			document.getElementById("ct1").classList.add("c1");
			refreshItem("ct1");
			setTimeout(blar,1500);
			break;
		default:
	}
		step++;
	if (step == 64) {
		step = 0;
	}
}

function start() {
	blar();
}