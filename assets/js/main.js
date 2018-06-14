$(document).ready(function() {
	/*
	{
		readingSpeed,
		minutesToRead,
		wordsInArticle
	}
	*/
	chrome.storage.sync.get(function(data) { //
		var wordsInArticleText = document.getElementById('words-in-article');
		var minutesToRead = document.getElementById('minutes-to-read');
		wordsInArticleText.innerText = data.wordsInArticle;
		minutesToRead.innerText = data.minutesToRead;
	});
});
