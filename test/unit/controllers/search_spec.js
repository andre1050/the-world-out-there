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

    it("should have a title variable", function() {
        expect(ctrl.title).toBeDefined();
    }); 

});