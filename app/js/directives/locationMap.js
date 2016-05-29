function LocationMap(LocationService) {
    "ngInject"

    return {
        restrict: "EA",
        templateUrl: "directives/locationMap.html",
        scope: {
            userCoordinates: "="
        },
        link: function(scope) {

            scope.googleMapsUrl = LocationService.getGoogleMapsUrl();

            // We're watching the userCoordinates object from the parent scope
            // and updating this directive's scope when they change.
            scope.$parent.$watch("userCoordinates", function(userCoordinates) {
                scope.latitude = userCoordinates.latitude;
                scope.longitude = userCoordinates.longitude;
            });

        }
    };
}

export default {
  name: "locationMap",
  fn: LocationMap
};