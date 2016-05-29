"use strict";

describe("Unit: ResultsCtrl", function() {

    let ctrl;

    beforeEach(function() {

        // Instantiate the app module
        angular.mock.module("app");

        // Mock the controller and inject dependencies
        angular.mock.inject(($controller, $rootScope, VenuesService) => {
            ctrl = $controller("ResultsCtrl", {
                "$scope": $rootScope.$new(),
                "VenuesService": VenuesService
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