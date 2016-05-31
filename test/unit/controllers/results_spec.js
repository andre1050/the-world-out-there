"use strict";

describe("Unit: ResultsCtrl", function() {

    let ctrl;

    beforeEach(function() {

        // Instantiate the app module
        angular.mock.module("app");

        // Mock the controller and inject dependencies
        angular.mock.inject(($controller, $stateParams, $location, $rootScope, VenuesService) => {
            ctrl = $controller("ResultsCtrl", {
                "$scope": $rootScope.$new(),
                "VenuesService": VenuesService,
                "$location": $location,
                "$stateParams": $stateParams
            });
        });

    });

    it("should exist", function() {
        expect(ctrl).toBeDefined();
    });

    it("should have a scope object containing method names", function() {
        expect(ctrl.scope).toEqual(jasmine.any(Object));
    });

    it("should have a scope object with a method to fetch trendy nearby venues for a set of coordinates", function() {
        expect(ctrl.scope.getTrendyNearbyVenues).toEqual(jasmine.any(Function));
    }); 

    it("should have a scope object with a method to fetch photos for a venue giving its set of coordinates", function() {
        expect(ctrl.scope.getPhotosByCoordinates).toEqual(jasmine.any(Function));
    }); 

});