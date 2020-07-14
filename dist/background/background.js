chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.url === "chrome://newtab/") {
    console.log("newtab");

    if (shouldReplaceNewTabSetting === true) {
      chrome.tabs.update(tab.id, {
        url: chrome.extension.getURL("tab.html")
      });
    }
  }
});
