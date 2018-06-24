$(document).ready(function() {
	$('#sample-article').click(function() {
		chrome.tabs.create({ url: 'https://medium.com/@emmanuelmark/how-to-create-a-javascript-library-30df146b3d2a' });
	});
});
