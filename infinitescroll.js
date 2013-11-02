/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO


@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('jackrabbitsgroup.angular-infinitescroll', []).directive('jrgInfinitescroll', [ function () {

	return {
		restrict: 'A',
		scope: {
		},

		compile: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
			
			var html ="<div>";
			html+="</div>";
			element.replaceWith(html);

			return function(scope, element, attrs) {
			};
		},
		
		controller: function($scope, $element, $attrs) {
		}
	};
}]);