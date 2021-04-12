alert("nigger");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const re = new RegExp('Hej', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({count: matches.length})
})