"use strict";

describe("Unit: LocationService", function() {

	let service;

	beforeEach(function() {

	    // Instantiate the app module
	    angular.mock.module("app");

	    // Mock the service
	    angular.mock.inject((LocationService) => {
	    	service = LocationService;
	    });

	});
	
	it("should exist", function() {
		expect(service).toBeDefined();
	});
	
}); 
