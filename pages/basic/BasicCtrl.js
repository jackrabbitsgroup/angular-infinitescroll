/**
*/

'use strict';

angular.module('myApp').controller('BasicCtrl', ['$scope', function($scope) {
	$scope.users =[];
	$scope.usersList =[];
	$scope.scrollOpts ={};
	
	//handle load more (callbacks)
	var itemsMore =[];
	for(var ii=0; ii<100; ii++) {
		itemsMore[ii] ={'_id':(ii+1), 'name':(ii+1)+'. Item #'+(ii+1)};
	}
	
	// @param {Object} params
		// @param {Number} cursor Where to load from
		// @param {Number} loadMorePageSize How many to return
		// @param {String} searchText The string of text that was searched
	// @param {Function} callback Function to pass the results back to - takes the following arguments:
		// @param {Array} results The new results to add in
		// @param {Object} [params]
	$scope.loadMore =function(params, callback) {
		var results =itemsMore.slice(params.cursor, (params.cursor+params.loadMorePageSize));
		callback(results, {});
	};
}]);