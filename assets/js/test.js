$(document).ready(function() {

	$('body').fadeIn();

	$('.starttest').click(function() {
		var instructions = document.getElementsByClassName('instructions')[0];
		var test = document.getElementsByClassName('test')[0];
		instructions.style.transform = 'translateY(-100vh)';
		test.style.transform = 'translateY(0)';

		$('.stoptest').click(function() {
			var modal = document.getElementsByClassName('modal')[0];
			var stopButton = document.getElementsByClassName('stoptest')[0];
			//modal.classList.add('open');

			$('.letsgo').click(function() {
				$('body').fadeOut(function() {

				});
			});

		});

	});

});
