"use strict";

describe("Unit: VenuesService", function() {

	let service;

	beforeEach(function() {

	    // Instantiate the app module
	    angular.mock.module("app");

	    // Mock the service
	    angular.mock.inject((VenuesService) => {
	    	service = VenuesService;
	    });

	});

	it("should exist", function() {
		expect(service).toBeDefined();
	});

}); 
