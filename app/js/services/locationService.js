"use strict";

function LocationService(AppSettings, $q, $http) {
	"ngInject"; 
 
	const service = {};

	// Return URL of Google Maps API JavaScript file
	service.getGoogleMapsUrl = () => {
		return "https://maps.google.com/maps/api/js?key=" + AppSettings.oAuthDetails.googleMaps.key;
	};

	// Return user"s current location if device supports geolocation
	service.getUserLocation = () => {
		let errorMsg;
		return $q((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(response => {
					resolve(response.coords);
				}, error => {
					errorMsg = error.message;
					reject(errorMsg);
				});
			} else {
				errorMsg = "Device does not support Geolocation";
				reject(errorMsg);
			}
		});
	};

  // Return a place name matching a set of coordinates
  service.getPlaceNameByCoordinates = coordinates => {
  	let errorMsg;
  	return $q((resolve, reject) => {
  		$http({
  			method: "GET",
  			url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coordinates.latitude + "," + coordinates.longitude + "&key=" + AppSettings.oAuthDetails.googleMaps.key
  		})
  		.then(response => {
  			if (response.data && response.data.results[0]) {
  				resolve(response.data.results[0].formatted_address);
  			} else {
  				errorMsg = "No place name found for those coordinates";
  				reject(errorMsg);
  			}
  		}, () => {
  			errorMsg = "Could not connect to server";
  			reject(errorMsg);
  		});
  	});
  };

  // Return set of coordinates matching a postcode
  service.getCoordinatesByPostcode = postcode => {
  	let errorMsg;
  	return $q((resolve, reject) => {
  		$http({
  			method: "GET",
  			url: "http://api.postcodes.io/postcodes/" + postcode
  		})
  		.then(response => {
  			if (response.data && response.data.result) {
  				resolve(response.data.result);
  			} else {
  				errorMsg = "No place name found for that postcode";
  				reject(errorMsg);
  			}
  		}, () => {
  			errorMsg = "Could not connect to server";
  			reject(errorMsg);
  		});
  	});
  };

  return service;

}

export default {
	name: "LocationService",
	fn: LocationService
};
