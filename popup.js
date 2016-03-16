document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
    var dayValue = document.getElementById('dayVal');
    
    var dana = days_between().toString();
   
     //dayValue.textContent = days_between();
      dayValue.textContent = dana;
  chrome.browserAction.setBadgeText({text: dana});

function days_between() {
  
    //var startDate = new Date(2016, 1-1, 2);
    var startDate = new Date(2016,0,02); // 2000-01-01
var endDate =   new Date();              // Today


  var ndays;
  var tv1 = startDate.valueOf();  // msec since 1970
  var tv2 = endDate.valueOf();

  ndays = (tv2 - tv1) / 1000 / 86400;
  ndays = Math.round(ndays - 0.5);
  return ndays + 1;
}
});
/*
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
*/