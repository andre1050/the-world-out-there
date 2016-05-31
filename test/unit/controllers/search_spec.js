"use strict";

describe("Unit: SearchCtrl", function() {

    let ctrl;

    beforeEach(function() {
        
        // Instantiate the app module
        angular.mock.module("app");

        // Mock the controller and inject dependencies
        angular.mock.inject(($controller, $rootScope, LocationService) => {
            ctrl = $controller("SearchCtrl", {
                "$scope": $rootScope.$new(),
                "LocationService": LocationService
            });
        });

    });

    it("should exist", function() {
        expect(ctrl).toBeDefined();
    });

    it("should have a scope object containing method names", function() {
        expect(ctrl.scope).toEqual(jasmine.any(Object));
    });

    it("should have a scope object with a method to get the user location", function() {
        expect(ctrl.scope.getUserLocation).toEqual(jasmine.any(Function));
    }); 

    it("should have a scope object with a method to fetch a name for a set of coordinates", function() {
        expect(ctrl.scope.getPlaceNameByCoordinates).toEqual(jasmine.any(Function));
    }); 

    it("should have a scope object with a method to fetch a set of coordinates for a postcode", function() {
        expect(ctrl.scope.getCoordinatesByPostcode).toEqual(jasmine.any(Function));
    }); 

});