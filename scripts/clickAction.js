//アイコンクリック時の処理
(function(){
  var currentUrl = location.href;

  if(currentUrl.match(/\/\/www\.youtube\.com\/watch/g)){
    currentUrl = currentUrl.replace(/\/\/www\.youtube\.com\/watch/g, "//listenonrepeat.com/watch");
    location.href = currentUrl;
  }else if(currentUrl.match(/\/\/listenonrepeat\.com\/watch/g)){
    currentUrl = currentUrl.replace(/\/\/listenonrepeat\.com\/watch/g, "//www.youtube.com/watch");
    location.href = currentUrl;
  }
})();