let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
    chrome.tabs.query({ active: true, highlighted: true, currentWindow: true}, function (tab) {
        console.log(tab[0].title)
        // do some stuff here
    });

});