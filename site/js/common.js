$(document).ready(function() {

	$('.js-main-btn').click(function() {
		$(this).addClass('is-active');
		$('.js-ins-btn').removeClass('is-active');
		$('.js-weapon-btn').removeClass('is-active');
		$('.js-instance').removeClass('is-active');
		$('.js-weapon').removeClass('is-active');
		$('.js-main').addClass('is-active');
		setTimeout(function() {
		}, 700);
	});

	$('.js-ins-btn').click(function() {
		$(this).addClass('is-active');
		$('.js-main-btn').removeClass('is-active');
		$('.js-weapon-btn').removeClass('is-active');
		$('.js-main').removeClass('is-active');
		$('.js-weapon').removeClass('is-active');
		$('.js-instance').addClass('is-active');
		setTimeout(function() {
		}, 700);
	});

	$('.js-weapon-btn').click(function() {
		$(this).addClass('is-active');
		$('.js-main-btn').removeClass('is-active');
		$('.js-ins-btn').removeClass('is-active');
		$('.js-main').removeClass('is-active');
		$('.js-instance').removeClass('is-active');
		$('.js-weapon').addClass('is-active');
		setTimeout(function() {
		}, 700);
	});

});