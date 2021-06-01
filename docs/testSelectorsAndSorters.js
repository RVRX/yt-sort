
//get all videos
let videos = document.querySelectorAll("ytd-grid-video-renderer") //static/not live NodeList

//get today's section
let todaysSectionOutermost = document.querySelector("ytd-item-section-renderer.style-scope:nth-child(1)"); //Element or null

//get section for each day
let daySections = document.querySelectorAll("ytd-item-section-renderer.style-scope"); //static NodeList

//get innermost flexbox of video elements
ytd-item-section-renderer.style-scope:nth-child(1) > div:nth-child(3) > ytd-shelf-renderer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ytd-grid-renderer:nth-child(1) > div:nth-child(2)

//get all videos for today (ytd-grid-video-renderer)
let todaysVideos = todaysSectionOutermost.querySelectorAll("ytd-grid-video-renderer");

//get views for a video element (ytd-grid-video-renderer)
aVideoElement.querySelector("div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").textContent
//Ex:
todaysVideos.item(0).querySelector("div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").textContent

/**
parse views to actual number (1.3k views = 1300)
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