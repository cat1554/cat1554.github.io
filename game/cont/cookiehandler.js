var cookie_getting;

function cookie_get(item) {
	cookie_getting = document.cookie.split(";");
	if ((cookie_getting.find(element => element.startsWith(encodeURIComponent(item) + "=") == true)) != undefined) {
		return cookie_getting.find(element => element.startsWith(encodeURIComponent(item) + "=") == true);
	} else if ((cookie_getting.find(element => element.startsWith(" " + encodeURIComponent(item) + "=") == true)) != undefined) {
		return cookie_getting.find(element => element.startsWith(" " + encodeURIComponent(item) + "=") == true);
	}
	return null;
}

function cookie_set(item, data, expires) {
	if (expires) {
		document.cookie = encodeURIComponent(item) + "=" + encodeURIComponent(data) + ";path=/;max-age=" + Number(expires);

		window.console.debug("Added a cookie:\n\tName: " + item + "\n\tValue: " + data + "\n\tCookie expires after " + expires + " seconds");
	} else {
		document.cookie = encodeURIComponent(item) + "=" + encodeURIComponent(data) + ";path=/";

		window.console.debug("Added a cookie:\n\tName: " + item + "\n\tValue: " + data + "\n\tCookie does not expire");
	}

	return true;
}

function cookie_list() {
	window.console.debug("Listed all cookies.");

	return document.cookie.split(";");
}

function cookie_clear(item) {
	cookie_getting = null;

	cookie_getting = cookie_get(item);

	if (cookie_getting != null) {
		document.cookie = cookie_getting + ";path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		window.console.debug("Cleared cookie: " + item);

		return true;
	} else {
		window.console.debug("Tried to clear cookie, but it doesn't exist: " + item);

		return false;
	};
}

function cookie_clearall() {
	cookie_getting = null;

	cookie_getting = document.cookie.split(";");

	for (let x in cookie_getting) {
		window.console.debug("Cleared cookie: " + cookie_getting[x]);
		document.cookie = cookie_getting[x] + ";path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
	window.console.debug("Removed all cookies.");

	return true;
}