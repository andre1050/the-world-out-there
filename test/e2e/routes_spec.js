"use strict";

describe("E2E: Routes", function() {

	it("should have a working search route", function() {
		browser.get("#/");
		expect(browser.getLocationAbsUrl()).toMatch("/");
	});

});