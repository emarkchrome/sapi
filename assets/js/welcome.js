$(document).ready(function() {

	$('body').fadeIn();

	$('.letsgo').click(function() { // 'Let's Go Button
		// Fade out entire page
		$('body').fadeOut(function() {
			window.location.href='test.html';
		});
	});

});
