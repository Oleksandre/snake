$(function() {

	
})

$(document).ready(function(){
	$('.slider').slick({
		// autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		arrows: true,
		centerMode: false,
		zIndex: 0
		// centerPadding: '0px',
		// dots: true
	});
});

$(document).ready(function(){
	$('.block_slide').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 3000,
		arrows: false,
		// centerMode: true,
		// centerPadding: '200px',
		// slidesToShow: 3
		dots: true
	});
});

$(document).ready(function(){
	$('.block_slide_2').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 3000,
		arrows: false,
		centerMode: false,
		// centerPadding: '0px',
		dots: true
	});
});