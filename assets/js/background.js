// Open welcome tab upon installation
chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == "install") {
		chrome.tabs.create({ url: "welcome.html" });
	}
});
