//タブ切り替えごとの処理
chrome.tabs.onActivated.addListener(function(){
  changeIcon();
});
chrome.tabs.onUpdated.addListener(function(){
  changeIcon();
});


//クリック時処理
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {
      "file": "scripts/clickAction.js"
  });
});

//アイコンのアクティブ状態の制御
function changeIcon(){
  chrome.tabs.getSelected(null, function(tab) {
    if (tab.url.match(/\/\/www\.youtube\.com\/watch/g)
      || tab.url.match(/\/\/listenonrepeat\.com\/watch/g)) {
      chrome.browserAction.setIcon({
        path:"img/icon_active.png"
      });
    }else{
      chrome.browserAction.setIcon({
        path:"img/icon.png"
      });
    }
  });
};
