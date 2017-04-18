/* Function for handling modeless share dialogs */
const shareDialog = function(url) {
	if (vue.$data.date) {
		var date = vue.$data.date;
		//re-format the date string from month-day-year to year-month-day
		date = date.slice(-4) + '/'	+ date.slice(0,2) + '/' + date.slice(3,5) + '/';
	} else {
		var date = ''
	}
	window.open(
	  url + 'https://www.nytimes.com/books/best-sellers/' + date, 
	  'share-dialog',
	  'width=626,height=436'
	); 
	return false;
}

window.shareDialog = shareDialog;
export default shareDialog;
