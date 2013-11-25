# AngularJS infinite scroll (more robust) directive

## Why / When to use?
Why not just use the (popular) <a href='https://github.com/BinaryMuse/ngInfiniteScroll'>nginfinitescroll</a> directive?
nginfinitescroll is awesome, simple, and lightweight, but when working with mobile devices especially, it's good practice to limit the number of DOM elements on the screen so we wanted something that would limit the DOM to only the visible elements. This directive address that and has some more robust features. If you don't need these extra features and/or want ALL content to remain visible on the DOM as you scroll, by all means stick with something like nginfinitescroll - it gets the job done and is more lightweight (less code) than this. But if you want a bit more control and DOM performance, try this out.

## Demo
http://jackrabbitsgroup.github.io/angular-infinitescroll/

## Dependencies
- required:
	- AngularJS >=1.2.2
	- jQuery (tested with 1.8.3) - NOTE: we're aiming to remove this dependency to keep it more lightweight

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install
1. download the files
	1. Bower
		1. add `"angular-infinitescroll": "latest"` to your `bower.json` file then run `bower install` OR run `bower install angular-infinitescroll`
2. include the files in your app
	1. `infinitescroll.min.js`
	2. `infinitescroll.less` OR `infinitescroll.min.css` OR `infinitescroll.css`
3. include the module in angular (i.e. in `app.js`) - `jackrabbitsgroup.angular-infinitescroll`

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.


## Documentation
See the `infinitescroll.js` file top comments for usage examples and documentation
https://github.com/jackrabbitsgroup/angular-infinitescroll/blob/master/infinitescroll.js