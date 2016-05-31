"use strict";

function SearchCtrl($scope, LocationService) {
	"ngInject"

    // Boolean to save the state of geolocation attempt
    $scope.locationWasAttempted = false;

    // Get user"s location using device"s geolocation
    $scope.getUserLocation = () => {
        LocationService.getUserLocation()
        .then(coordinates => {
            $scope.userCoordinates = coordinates;
        }).catch(errorMsg => {
            $scope.locationWasAttempted = true;
            $scope.locationError = errorMsg;
        });
    };

    // Watch user coordinates so that a place name can be fetched when they change,
    // e.g. when user has switched between geolocation and postcode
    $scope.$watch("userCoordinates", coordinates => {
        if (coordinates) {
            getPlaceNameByCoordinates();
        }
    });

    // Fetch a place name for a set of coordinates
    let getPlaceNameByCoordinates = () => {
        LocationService.getPlaceNameByCoordinates($scope.userCoordinates)
        .then(placeName => {
            $scope.userPlaceName = placeName;
        }).catch(errorMsg => {
            $scope.locationError = errorMsg;
        });
    }

    // Fetch a set of coordinates for a postcode
    $scope.getCoordinatesByPostcode = () => {
        LocationService.getCoordinatesByPostcode($scope.userPostcode)
        .then(coordinates => {
            $scope.userCoordinates = { 
                latitude: coordinates.latitude, 
                longitude: coordinates.longitude
            };
        }).catch(errorMsg => {
            $scope.locationError = errorMsg;
        });
    };

    // Return VM for testing
    const vm = this;
    vm.scope = {
        getUserLocation: $scope.getUserLocation,
        getPlaceNameByCoordinates: getPlaceNameByCoordinates,
        getCoordinatesByPostcode: $scope.getCoordinatesByPostcode
    };

}

export default {
    name: "SearchCtrl",
    fn: SearchCtrl
};
