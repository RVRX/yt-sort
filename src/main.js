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

	//if #K
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

	//if #M
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

	//if #
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
 * Gets all view counts for a list of videos
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

/**
 * Video object. Contains an HTML node and a view count.
 * @param node the HTML node/element of the video (a flex item).
 * @constructor
 */
function Video(node) {
	this.node = node;
	this.views = parseViewCount(getViewCountText(node));
}

/**
 * Sorts a {@link Video} from highest to lowest views.
 * To be used by `compareFunction` parameter of built-in {@link Array.prototype.sort()} method.
 */
function viewsHighToLowSorter(a, b) {
	return a.views < b.views;
}

/**
 * Sorts a {@link Video} from lowest to highest views.
 * To be used by `compareFunction` parameter of built-in {@link Array.prototype.sort()} method.
 */
function viewsLowToHighSorter(a, b) {
	return a.views > b.views;
}


/*Executing code...*/
console.debug("Start of Executable code");

let todaysVideos = document.querySelector("ytd-item-section-renderer.style-scope:nth-child(1)").querySelectorAll("ytd-grid-video-renderer");

let arrayOfVideoObjects = [];

//propagate array with video objects
for (let i = 0; i < todaysVideos.length; i++) {
	arrayOfVideoObjects[i] = new Video(todaysVideos[i]);
}

arrayOfVideoObjects.sort(sortByViewsHTL);


console.debug("End of Executable code");