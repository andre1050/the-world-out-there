"use strict";

function NameMatchingService() {
	"ngInject";

	const service = {};

	// Simplify a venue name by removing all non-alphanumerical characters and lowercasing everything
	var simplifyVenueName = venueName => {
		return venueName.toLowerCase().replace(/[\W_]+/g,"");
	};

	// Return a Instagram location ID for a Foursquare set of venue coordinates
	service.getMatchingVenue = (venueToMatch, venuesArr) => {

		let venueId;
		venuesArr.forEach(venueInArr => {
			// TODO: the matching algorithm could be greatly improved to ensure
			// venues are matched if their names are slightly different accross Foursquare and Instagram.
			// For simplification, we're only performing basic string convertion to lowercase and spaces removal
			if (simplifyVenueName(venueInArr.name) === simplifyVenueName(venueToMatch)) {
				venueId = venueInArr.id;
			}
		});

		return venueId;
		
	}

	return service;

}

export default {
	name: "NameMatchingService",
	fn: NameMatchingService
};
