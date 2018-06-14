// Open welcome tab upon installation
chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == "install") {
		chrome.tabs.create({ url: "welcome.html" });
	}
});

//Canvas is used to change the extension icon on the fly
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// Listen for words send from article
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	switch (message.action) {
		case 'sendwordsinarticle':
			chrome.storage.sync.get(null, function(data) {
				var wordsInArticle = message.words;
				console.log('wordsInArticle: ' + wordsInArticle)
				var timeToReadArticleInMinutes = Math.round(wordsInArticle / /*data.readingSpeed*/ 200);

				canvas.width = 19;
        canvas.height = 19;
        //Alter text size depending on timeToRead value
        if (timeToReadArticleInMinutes >= 100) {
            context.font = '11px Arial';
        } else if (timeToReadArticleInMinutes >= 10) {
            context.font = '15px Arial';
        } else {
            context.font = '18px Arial';
        }
				context.fillStyle = '#2A3D45';
				context.fillRect(0, 0, 19, 19);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#FFFFFF';
        context.fillText(timeToReadArticleInMinutes, 10, 10);
        chrome.browserAction.setIcon({
            imageData: context.getImageData(0, 0, 19, 19)
        });
				chrome.storage.sync.set({ wordsInArticle: wordsInArticle });
			});
		case 'noarticle':
			chrome.browserAction.setIcon({
					path: 'assets/img/icon16.png'
			});
	}
});

chrome.tabs.onActivated.addListener(function() {
	executeContentScript();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    executeContentScript();
  }
});

function executeContentScript() {
	chrome.tabs.executeScript({
  	file: "assets/js/content.js",
    runAt: "document_end"
  });
}
