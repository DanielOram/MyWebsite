$(document).ready(function () {
	//This function animates the scrolling effect to the very top of the page when the up button is clicked.
	$('#Quick_Scroll_up').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 400);
	});
	//This function animates the scrolling effect to the very bottom of the page when the down button is clocked.
	$('#Quick_Scroll_down').click(function () {
		$("html, body").animate({ scrollTop: $(document).height() }, 400);
	});
});