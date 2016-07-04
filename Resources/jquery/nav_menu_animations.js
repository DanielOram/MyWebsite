//this class toggles the colour and dropdown effect on the navbar options
$(document).ready(function () {
    $(".dropDownMenu").hover(function () {
		$(this).addClass('headerColour');
		$(this).removeClass('navbarColour');
		//setTimeout(function () {
        $('ul.navList', this).stop(true, false).slideDown('medium', function () { /*you can ad something here for when the animation completes!!*/ 
		});
		//}, 500);
    }, function () {
		$(this).addClass('navbarColour');
		$(this).removeClass('headerColour');
        $('ul.navList', this).stop(true, false).slideUp('medium', function () {
        });
		//alert();
    });
});


//change bgcolour when hovering menubar options
$(document).ready(function () {
	$(".nav_items a").hover(function () {
		$(this).addClass('nav_items_a_hover headerColour')
		//$(this).css('color', 'red'); //change this
		$(this).removeClass('nav_items_a_not_hover')
	}, function () {
		$(this).addClass('nav_items_a_not_hover')
		$(this).removeClass('nav_items_a_hover headerColour')
	});
	
	$("#Quick_Scroll_up").hover(function () {
		$(this).addClass('headerColour')
	}, function () {
		$(this).removeClass('headerColour')
	});
	
	$("#Quick_Scroll_down").hover(function () {
		$(this).addClass('headerColour')
	}, function () {
		$(this).removeClass('headerColour')
	});
});

/*
$(document).ready(function () {
	alert($(".content_wrap").width());
	alert($(".content_wrap").height());
});
*/

//fixed!!

//NB - putting $('.theList', this) allows independent animations of the dropdowns!

