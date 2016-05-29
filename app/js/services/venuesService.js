"use strict";

function VenuesService(AppSettings, NameMatchingService, $q, $http) {
	"ngInject";

	const venueSettings = {
		maxResults: 10,
		radius: 2000
	};

	const service = {};

	// Return a set of trending nearby venues matching a set of coordinates
	service.getTrendyNearbyVenues = coordinates => {
		let errorMsg;
		return $q((resolve, reject) => {
			$http({
				method: "GET",
				url: "https://api.foursquare.com/v2/venues/trending?client_id=" + AppSettings.oAuthDetails.foursquare.clientId + "&client_secret=" + AppSettings.oAuthDetails.foursquare.clientSecret + "&limit=" + venueSettings.maxResults + "&radius=" + venueSettings.radius + "&v=20130815&ll=" + coordinates.latitude + "," + coordinates.longitude
			}).then(response => {
				if (response.data.response.venues) {
					resolve(response.data.response.venues);
				} else {
					errorMsg = "Could not parse server response";
					reject(errorMsg);
				}
			}, () => {
				errorMsg = "Could not connect to server";
				reject(errorMsg);
			});

		});
	};

	// Return a set of photos matching a set of coodinates
	service.getPhotosByCoordinates = (venueName, venueCoordinates) => {
		let errorMsg;
		return $q((resolve, reject) => {

			// First let's search the venue by coordinates on Instagram
			$http({
				method: "JSONP",
				url: "https://api.instagram.com/v1/locations/search?lat=" + venueCoordinates.latitude + "&lng=" + venueCoordinates.longitude + "&access_token=" + AppSettings.oAuthDetails.instagram.accessToken + "&callback=JSON_CALLBACK"
			}).then(response => {
				if (response.data && response.data.data) {
					// Let's search Instagram for locations near the venue location
					// and iterate through the results array to find the venue whose name matches ours.
					let venuesArr = response.data.data;
					let venueId = NameMatchingService.getMatchingVenue(venueName, venuesArr);
					// If a match was found, load pictures for that venue.
					if (venueId) {
						getPhotosByVenue(venueId).then(photos => {
							resolve(photos);
						}).catch(errorMsg => {
							reject(errorMsg);
						});
					}
				} else {
					errorMsg = "No venue name found for those coordinates";
					reject(errorMsg);
				}
			}, () => {
				errorMsg = "Could not connect to server";
				reject(errorMsg);
			});
		});
	}

	// Return a set of photos matching a venue ID
	var getPhotosByVenue = venueId =>  {
		let errorMsg;
		return $q((resolve, reject) => {
			$http({
				method: "JSONP",
				url: "https://api.instagram.com/v1/locations/" + venueId + "/media/recent?access_token=" + AppSettings.oAuthDetails.instagram.accessToken + "&callback=JSON_CALLBACK"
			}).then(response => {
				if (response.data && response.data.data) {
					let photos = response.data.data;
					resolve(photos);
				} else {
					errorMsg = "No photos found for that venue";
					reject(errorMsg);
				}
				resolve(response.data.data);
			}, () => {
				errorMsg = "Could not connect to server";
				reject(errorMsg);
			});

		});
	}

	return service;

}

export default {
	name: "VenuesService",
	fn: VenuesService
};
