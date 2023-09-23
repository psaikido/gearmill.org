const cookieTheme = getCookie('theme');

if (cookieTheme != ''){
    $('html').addClass(cookieTheme);
}

$("#dark-mode-button").on("click", function() {
	const theme = getCookie('theme');
	if (theme == 'dark') {
		setTheme('');
	} else {
		setTheme('dark');
	}
});

function setTheme(theme) {
    $('html').removeClass('dark');
    $('html').addClass(theme);
    eraseCookie('theme');

	if (theme == 'dark') {
    createCookie('theme', 'dark', 7);
	}
}

$('#hamburger').on("click", function() {
	$('ul#primary-nav').toggle();
});
