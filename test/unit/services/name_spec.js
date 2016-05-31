"use strict";

describe("Unit: NameMatchingService", function() {

	let service;

	beforeEach(function() {

	    // Instantiate the app module
	    angular.mock.module("app");

	    // Mock the service
	    angular.mock.inject((NameMatchingService) => {
	    	service = NameMatchingService;
	    });

	});

	it("should exist", function() {
		expect(service).toBeDefined();
	});

	it("should have a method to return a venue name match", function() {
		expect(service.getMatchingVenue).toEqual(jasmine.any(Function));
	});

}); 
