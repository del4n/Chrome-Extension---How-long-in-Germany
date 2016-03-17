document.addEventListener('DOMContentLoaded', function () {
		
	chrome.storage.sync.get({
		header: "I am here ",
		date: "2016-01-01",
		footer: "days "
	}, function (obj) {
		document.getElementById('header').innerHTML  = obj.header;
		var startDate = moment(obj.date);
		document.getElementById('footer').innerHTML  = obj.footer;
		
		var checkPageButton = document.getElementById('checkPage');
		var daysDiff = daysBetween(startDate).toString(); 
		document.getElementById('dayVal').innerHTML = daysDiff;
		chrome.browserAction.setBadgeText({
			text: daysDiff
		});
	});
	
    function daysBetween(startDate) {
        return moment().diff(startDate, 'days');
    }
});


