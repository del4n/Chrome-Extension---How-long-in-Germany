document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    var dayValue = document.getElementById('dayVal');

    var dana = days_between().toString(); 
    dayValue.textContent = dana;
    chrome.browserAction.setBadgeText({
        text: dana
    });

    function days_between() {
 
        var startDate = new Date(2016, 0, 02); 
        var endDate = new Date(); // Today
 
        var ndays;
        var tv1 = startDate.valueOf();  
        var tv2 = endDate.valueOf();

        ndays = (tv2 - tv1) / 1000 / 86400;
        ndays = Math.round(ndays - 0.5);
        return ndays + 1;
    }
});
