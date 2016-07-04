/*This function scrolls down to the element when ckicking on the element*/
/*Just need to add class to an element in html*/
$(document).ready(function () {
	$('.scroll_to_element').click(function () {
		//$(document).scrollTop(400);
		/*animated effect*/
		$("html, body").animate({ scrollTop: $(this).height() }, 400);
	});
});

/*This function adds the 'scroll then fixed' effect to an element*/
$(document).ready(function () {
    $(document).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.menubar').each(function () {
            var scrollFix = $(this);
            var topDistance = scrollFix.offset().top;
            var previousElement = scrollFix.prev();
			/*height is the header area minus the menubar height which is the point at which after scrolling we fix the element.*/
			var height = $('#headerContainer').height() - $('.menubar').height();
            if ((height) < scrollTop) {
                scrollFix.addClass("stuck");
                $("#headerContainer").addClass("extend");
				/*fade in effects for the scroll buttons*/
				$("#Quick_Scroll_up").fadeIn(200);
				$("#Quick_Scroll_down").fadeIn(200);
            } else if (height >= scrollTop && scrollFix.hasClass('stuck')) {
                scrollFix.removeClass('stuck');
                $("#headerContainer").removeClass("extend");
				/*fade out effects for the scroll buttons*/
				$("#Quick_Scroll_up").fadeOut(600);
				$("#Quick_Scroll_down").fadeOut(600);
            }
        });
    });
});