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

	it("should have a method to return a list of trendy nearby venues for a set of coordinates", function() {
		expect(service.getTrendyNearbyVenues).toEqual(jasmine.any(Function));
	});

	it("should have a method to return a list of photos matching a set of coordinates", function() {
		expect(service.getPhotosByCoordinates).toEqual(jasmine.any(Function));
	});

}); 
