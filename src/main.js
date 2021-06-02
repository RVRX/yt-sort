console.log("Starting Extension");

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
		return parseInt(ytviews);
	}
}

/**
 * Gets the view text for a specific video
 * Can be parsed by {@link parseViewCount}.
 * @param video
 */
function getViewCountText(video) {
	return video.querySelector("div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").textContent;
}

/**
 * Gets all view counts
 * @param listOfVideos
 * @returns {*[]}
 */
function getViewCounts(listOfVideos) {
	let arrayOfVideoViewCounts = [];
	for (let i = 0; i < listOfVideos.length; i++) {
		arrayOfVideoViewCounts[i] = parseViewCount(getViewCountText(listOfVideos.item(i))); //todo refactor out a getViewCount fcn.
		console.debug(arrayOfVideoViewCounts[i]);
	}
	return arrayOfVideoViewCounts;
}

console.debug("End of Executable code");