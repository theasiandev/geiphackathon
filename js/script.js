/*Al's JS*/

/*navbar to change color on scroll*/
$(window).scroll(function() {
	$('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

/*navbar onclick -- mobile*/
$('.menu-toggle').click(function() {
	$('.NavigationMenu').toggleClass('NavigationMenu--open', 500);
	$(this).toggleClass('open');
})




