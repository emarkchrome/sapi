chrome.storage.sync.get(null, function(data) {
	if (document.body.getElementsByTagName('article')[0]) {
		var articleElement = document.body.getElementsByTagName('article')[0];
		var wordsInArticle = articleElement.innerText.split(' ').length;
		console.log(wordsInArticle + ' words in article approximately');
		chrome.runtime.sendMessage({ action: 'sendwordsinarticle', words: wordsInArticle });
		chrome.runtime.sendMessage({ action: 'useronboardingcompleted' });
	} else {
		chrome.runtime.sendMessage({ action: 'noarticle' });
	}
});
