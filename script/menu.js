$(document).ready(() => {

	$('.menu_img').on('click', () => {
		$('.menu').fadeToggle(800);
	});

	$('.close').on('click', () => {
		$('.menu').fadeOut(800);
	});

	$('.menu').on('click', () => {
		$('.menu').fadeOut(800);
	});

	$(() => {
		$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('a').on('click', () => {
		$('.menu').fadeOut(1000);
	})
	
})


