# The World Out There
---
TWOT is a working prototype of a social media app that pulls trending venues for a given location and pairs the results with recent pictures from Instagram. It will help you find cool nearby places and show you what  people are posting from there. It is built in Angular and written in ES2015. It is a proof of concept and not meant for production or distribution.

![Image of Yaktocat](http://andretc.com/demos/twot/twot_cover.png)

[Live Demo](http://andretc.com/demos/twot/)

NOTE: Geolocation may not work in the live demo if your browser implements the [Prefer Secure Origins For Powerful New Features](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features) recommendation from the Chromium Security team. This is because I don't yet run my website (where the demo is hosted) over SSL. Sorry about that. It will work locally (instructions below) or on any other web server with SSL enabled.

[Screenshot 1](http://andretc.com/demos/twot/twot_screen1.png)
[Screenshot 2](http://andretc.com/demos/twot/twot_screen2.png)

#### Cool. So what tech did you use?
- AngularJS
- Gulp
- Browserify
- SASS
- Karma
- Jasmine
- Babel
- Bootstrap

TWOT was built on top of Jake Marsh's cool [boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate).

#### Where did you get all that data from?
- Google Maps
- Foursquare
- Postcodes.io
- Instagram

#### Oh I see. But how does it work, I mean, specifically?
1. TWOT geolocates you if your device supports that and you let it
2. If not, or if the geolocation isn't accurate enough, you can enter a UK postcode
3. A list of trending venues is pulled from Foursquare, all of which within a 2000m radius from you
4. For each venue we'll ping the Instagram API for the most recent pictures take there
5. You see what venues are trending, how to find them and what the patrons are up to

#### Rock on! So what if I want to run this locally?
You totally can, and I'd love it if you did. It should be pretty straightforward if you follow the steps below:

1. Clone this repository using `git clone https://github.com/andre1050/the-world-out-there.git`

2. Run `npm install` from the root directory

3. Create your own acess keys and tokens for the different APIs and update the `\app\js\constants.js` file accordingly:
    - API Key for [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)
    - Client ID and Secret for [Foursquare](https://foursquare.com/developers/apps)
    - Access Token for Instagram
        - [Register your client](https://www.instagram.com/developer/clients/manage)
        - [Generate your token](http://instagram.pixelunion.net)

4. Run `gulp dev` to start the dev server and spin up a new browser tab

If you want to run the unit tests, type `gulp unit`. I will be adding more soon. Refer to [Jake's repo](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate) for other build details.

#### My mind is blown. Is there a roadmap for this?
- Giving the whole thing a nice design would be cool. That result set could use with a proper gallery instead of a list of thumbnails. Maybe add a map to each venue as well. This is a proof of concent so I focused on the basic features. I will eventually get to the design bits.
- Improving the name matching algorithm to ensure we can always match a venue on Foursquare with a venue on Instagram. Unfortunately, they use separate venue IDs so the only way you can match them is by coordinates. The problem is that the different services may have slightly different names to the same venues (or names spelled differently). Currently it looks for an exact string match, but I'm probably going to implement something fancier, perhaps using [fuzzyset.js](http://glench.github.io/fuzzyset.js/). 

If you literally have nothing else to do and fancy getting involved on this... fork away and keep the pull requests coming!