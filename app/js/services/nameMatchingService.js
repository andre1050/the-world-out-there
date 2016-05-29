"use strict";

function NameMatchingService() {
	"ngInject";

	const service = {};

	// Return a Instagram location ID for a Foursquare set of venue coordinates
	service.getMatchingVenue = (venueToMatch, venuesArr) => {
		
		let venueId;
		venuesArr.forEach(venueInArr => {
			// TODO: the matching algorithm could be greatly improved to ensure
			// venues are matched if their names are slightly different accross Foursquare and Instagram.
			// For simplification, we're only looking for an absolute string match.
			if (venueInArr.name === venueToMatch) {
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
