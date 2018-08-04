$(document).ready(function() {

	document.getElementById('version').innerText = chrome.runtime.getManifest().version;

	$('#exit-page').click(function() {
		window.close();
	});
	
});
