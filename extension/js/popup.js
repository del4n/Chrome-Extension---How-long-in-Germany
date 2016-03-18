document.addEventListener('DOMContentLoaded', function () {

    chrome.storage.sync.get({
        header: "I am here ",
        date: "2016-01-01",
        footer: "days ",
        currentDay: false
    }, function (obj) {
        document.getElementById('header').innerHTML  = obj.header;
        var startDate = moment(obj.date);
        document.getElementById('footer').innerHTML  = obj.footer;

        var daysDiff = obj.currentDay ? (daysBetween(startDate) + 1) : daysBetween(startDate);

        document.getElementById('dayVal').innerHTML = daysDiff;
        chrome.browserAction.setBadgeText({
            text: daysDiff.toString()
        });
    });

    function daysBetween(startDate) {
            return moment().diff(startDate, 'days');
    }
});


