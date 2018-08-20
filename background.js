chrome.browserAction.onClicked.addListener(function() {
  var a = confirm("是否清理缓存？");
  if (a) {
    var data = {
      appcache: true, //则调用执行清除方法
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
      //弹出框
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id, function() {});
      });
    });
  }
});
