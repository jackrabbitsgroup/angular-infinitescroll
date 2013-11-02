/**
*/

'use strict';

angular.module('myApp').controller('PageScrollCtrl', ['$scope', function($scope) {
	$scope.scrollOpts ={};
	$scope.usersList =[];
	$scope.users =[];
	
	//handle load more (callbacks)
	var totItems =1000;
	var itemsMore =[];
	for(var ii=0; ii<totItems; ii++) {
		itemsMore[ii] ={'_id':(ii+1), 'name':(ii+1)+'. Item #'+(ii+1)};
	}
	//var offset =Math.floor(totItems/2);
	var offset =totItems-100;
	
	// @param {Object} params
		// @param {Number} cursor Where to load from
		// @param {Number} loadMorePageSize How many to return
		// @param {String} searchText The string of text that was searched
	// @param {Function} callback Function to pass the results back to - takes the following arguments:
		// @param {Array} results The new results to add in
		// @param {Object} [params]
	$scope.loadMore =function(params, callback) {
		var results =itemsMore.slice(offset+params.cursor, (offset+params.cursor+params.loadMorePageSize));
		callback(results, {});
	};
}]);