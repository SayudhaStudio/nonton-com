$(document).ready(function () {
	$('.hero').slick({
		dots: true,
        arrows: false
	});

	$('.list-slide').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		centerPadding: '15px',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					centerMode: true,
                    centerPadding: '10px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 2,
				},
			},
		],
	});
});
