function openYouTube() {
	var cookieSite = navigator.cookieEnabled;
	if (cookieSite) {
		var underCookieSite = getCookie('clickunder');
		if (underCookieSite == null) {
			var ExpDate = new Date();
			ExpDate.setTime(ExpDate.getTime() + (1 * 60 * 60 * 1000));
			setCookie('clickunder', '1', ExpDate, "/");
			window.open('https://www.youtube.com/');
			window.focus();
		}
	}
};

function getCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
};

function setCookie(name, value) {
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
};

document.onmouseup = openYouTube;