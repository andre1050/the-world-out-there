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

	it("should have a method to return the URL of the Google Maps JavaScript API", function() {
		expect(service.getGoogleMapsUrl).toEqual(jasmine.any(Function));
	});

	it("should have a method to return the user's current location", function() {
		expect(service.getUserLocation).toEqual(jasmine.any(Function));
	});

	it("should have a method to return a place name from a set of coordinates", function() {
		expect(service.getPlaceNameByCoordinates).toEqual(jasmine.any(Function));
	});

	it("should have a method to return a set of coordinates from a postcode", function() {
		expect(service.getCoordinatesByPostcode).toEqual(jasmine.any(Function));
	});
	
}); 
