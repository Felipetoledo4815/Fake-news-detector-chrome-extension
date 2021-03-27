// chrome.runtime.onInstalled.addListener(() => {
//     chrome.tabs.query({ active: true, }, function (tab) {
//       console.log(tab);
//         console.log(tab[0].title)
//         var input = tab[0].title;
//         chrome.tabs.sendMessage(tab[0].id, {"message": "got_title"});
//         console.log('sent message');
//         tabId = tab[0].id;
//         chrome.tabs.sendMessage(tabId, {"message": "send_message"});
//     });
// });


chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ active: true, }, function (tab) {
      console.log(tab[0].title)
      var input = tab[0].title;
      chrome.tabs.sendMessage(tab[0].id, {"message": "got_title"});
      console.log('sent message');
      tabId = tab[0].id;
      chrome.tabs.sendMessage(tabId, {greeting: input}, function(response) {
            console.log(response.farewell);
  });
  });
});
