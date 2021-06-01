/**
parse views to actual number.
Ex: 1.3K views -> 1300
@param ytviews must be formatted as "#K views", "#M views", or "# views"
*/
function parseViewCount(ytviews) {
	//remove ending (1.3k views -> 1.3k)
	ytviews = ytviews.slice(0, -6); 

	let views = 0; //final value to return
	let isDot = false;

	if (ytviews.includes('K')) {
		if (!ytviews.includes('.')) {
			return (ytviews.slice(0, -1) * 1000);
		} else {
			//get dot index
			let dotIndex = ytviews.indexOf('.');

			//parse before dot
			views += (ytviews.slice(0, dotIndex)) * 1000;
			//parse after dot
			views += ytviews.charAt(dotIndex + 1) * 100;
		}
		return views;
	} else if (ytviews.includes('M')) {
		if (!ytviews.includes('.')) {
			return (ytviews.slice(0, -1) * 1000000);
		} else {
			//get dot index
			let dotIndex = ytviews.indexOf('.');

			//parse before dot
			views += (ytviews.slice(0, dotIndex)) * 1000000;
			//parse after dot
			views += ytviews.charAt(dotIndex + 1) * 100000;
		}
		return views;
	} else {
		return ytviews;
	}
}