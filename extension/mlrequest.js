chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      var ans = request.greeting.concat('made it to mlrequest');
      chrome.storage.local.set({key: request.greeting}, function() {
        console.log('Value is set to ' + value);
      });
      sendResponse({farewell: ans});
  }
);
