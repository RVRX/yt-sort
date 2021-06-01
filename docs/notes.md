# HTML Element breakdown


* `<ytd-item-section-renderer>` outermost section for each day.
* `ytd-grid-renderer.style-scope.ytd-shelf-renderer` subsection of the above element, contains videos
* `<div id="items" class="style-scope ytd-grid-renderer">` subsection of above, innermost element encapsulating a day's videos.
* `ytd-grid-video-renderer.style-scope.ytd-grid-renderer` an inidivdual video object


For each day's videos, make an array of the views
```js
let viewCounts = [320, 10, 1, 5435];
````
"sort" the array in another array
```js
let newOrder = [];

for (var i = 0; i < viewCounts.length; i++) {
	viewCounts[i]
}

// let newOrder = [3, 0, 1, 2];
```

Get *All* videos:
```js
let videos = document.querySelectorAll("ytd-grid-video-renderer")
```

html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-browse.style-scope.ytd-page-manager ytd-two-column-browse-results-renderer.style-scope.ytd-browse.grid.grid-5-columns div#primary.style-scope.ytd-two-column-browse-results-renderer ytd-section-list-renderer.style-scope.ytd-two-column-browse-results-renderer div#contents.style-scope.ytd-section-list-renderer ytd-item-section-renderer.style-scope.ytd-section-list-renderer div#contents.style-scope.ytd-item-section-renderer ytd-shelf-renderer.style-scope.ytd-item-section-renderer div#dismissible.style-scope.ytd-shelf-renderer div#contents.style-scope.ytd-shelf-renderer ytd-grid-renderer.style-scope.ytd-shelf-renderer

```js
let videos = document.querySelectorAll(ytd-item-section-renderer.style-scope:nth-child(1) > div:nth-child(3) > ytd-shelf-renderer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ytd-grid-renderer:nth-child(1) > div:nth-child(2) > ytd-grid-video-renderer:nth-child(1))



```