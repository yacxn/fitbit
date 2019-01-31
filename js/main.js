
$(window).scroll(function() {
    if ($(".navbar").offset().top > 20) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(window).scroll(function () {
	if ($(".navbar").offset().top > 20) {
		$(".t").addClass("color-b");
		$(".t").removeClass("colo");
	} else {
		$(".t").removeClass("color-b");
		$(".t").addClass("colo");
	}
});
wow = new WOW(
	{
		animation: {
			duration: 400,
			effects: 'fade stagger(34ms) translateZ(-360px) translateY(10%)',
			easing: 'ease'
		}
	}
);
wow.init();