"use strict";

describe("Unit: Constants", function() {

  let constants;

  beforeEach(function() {

    // Instantiate the app module
    angular.mock.module("app");

    // Mock the directive
    angular.mock.inject((AppSettings) => {
      constants = AppSettings;
    });

  });

  it("should exist", function() {
    expect(constants).toBeDefined();
  });

  it("should have an application name", function() {
    expect(constants.appTitle).toEqual("The World Out There");
  });

  it("should have an oAuth details object", function() {
    expect(constants.oAuthDetails).toBeDefined();
  });

  it("should have oAuth details for Google Maps", function() {
    expect(constants.oAuthDetails.googleMaps.key).toEqual(jasmine.any(String));
  });

  it("should have oAuth details for Foursquare", function() {
    expect(constants.oAuthDetails.foursquare.clientId).toEqual(jasmine.any(String));
    expect(constants.oAuthDetails.foursquare.clientSecret).toEqual(jasmine.any(String));
  });

  it("should have oAuth details for Instagram", function() {
    expect(constants.oAuthDetails.instagram.accessToken).toEqual(jasmine.any(String));
  });

});