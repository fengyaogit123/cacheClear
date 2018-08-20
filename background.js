chrome.browserAction.onClicked.addListener(function() {
  var data = {
    appcache: true, 
    cache: true,
    cookies: false,
    downloads: false,
    fileSystems: true,
    formData: true,
    history: true,
    indexedDB: true,
    localStorage: true,
    serverBoundCertificates: true,
    pluginData: true,
    passwords: false,
    webSQL: true
  };
  var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 30;
  var ago = new Date().getTime() - millisecondsPerWeek;
  chrome.browsingData.remove({ since: ago }, data, function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.reload(tabs[0].id, function() {});
    });
  });
});
