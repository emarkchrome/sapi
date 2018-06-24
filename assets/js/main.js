$(document).ready(function() {
	/*
	{
		readingSpeed,
		minutesToRead,
		wordsInArticle
	}
	*/
	chrome.storage.sync.get(function(data) { //
		if(data.userNeedsOnboarding == true) {
			window.location.href = chrome.runtime.getURL('onboarding.html');
		}
		var wordsInArticleText = document.getElementById('words-in-article');
		var minutesToRead = document.getElementById('minutes-to-read');
		wordsInArticleText.innerText = data.wordsInArticle;
		minutesToRead.innerText = data.minutesToRead;
	});

	$('#options-icon').click(function() {
		chrome.tabs.create({ url: chrome.runtime.getURL('options.html') });
	});
});
