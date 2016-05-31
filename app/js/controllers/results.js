"use strict";

function ResultsCtrl($scope, $stateParams, $location, VenuesService) {
	"ngInject"

	// If either latitude or longitude URL parameters aren"t set,
	// take user back to search state
	if (!$stateParams.latitude || !$stateParams.longitude) {
		$location.path("/");
	} else {
		let coordinates = { 
			latitude: $stateParams.latitude, 
			longitude: $stateParams.longitude
		};
		getTrendyNearbyVenues(coordinates);
	}

	// Fetch a list of trending nearby venues
    // We need this one hoisted so let's keep the function keyword
	function getTrendyNearbyVenues(coordinates) {
		VenuesService.getTrendyNearbyVenues(coordinates)
		.then(trendingVenues => {
			$scope.trendingVenues = trendingVenues;
		}).then(() => {
			// Fetch photos for each of the venues
        	$scope.trendingVenues.forEach(venue => {
        		getPhotosByCoordinates(venue);
        	});
        }).catch(errorMsg => {
        	$scope.venuesError = errorMsg;
        });
    };

    // Fetch photos for a venue passing its coordinates
    let getPhotosByCoordinates = venue => {
    	let venueName = venue.name;
    	let venueCoordinates = { 
    		latitude: venue.location.lat, 
    		longitude: venue.location.lng
    	};
    	VenuesService.getPhotosByCoordinates(venueName, venueCoordinates)
    	.then(photos => {
    		venue.photos = photos;
    	}).catch(errorMsg => {
    		$scope.venuesError = errorMsg
    	});

    }

    // Return VM for testing
    const vm = this;
    vm.scope = {
        getTrendyNearbyVenues: getTrendyNearbyVenues,
        getPhotosByCoordinates: getPhotosByCoordinates
    };

}

export default {
	name: "ResultsCtrl",
	fn: ResultsCtrl
};