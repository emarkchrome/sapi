$(document).ready(function() {

	$('body').fadeIn();

	document.getElementById('version').innerText = chrome.runtime.getManifest().version;

	$('.letsgo').click(function() { // 'Let's Go Button
		// Fade out entire page
		$('body').fadeOut(function() {
			window.location.href='test.html';
		});
	});

});
