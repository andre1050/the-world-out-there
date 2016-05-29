function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  "ngInject";

  $locationProvider.html5Mode(false);

  $stateProvider

  .state("Search", {
      url: "/",
      controller: "SearchCtrl as search",
      templateUrl: "search.html",
      title: "Search"
  })

  .state("Results", {
    url: "/results/:latitude/:longitude",
    controller: "ResultsCtrl as results",
    templateUrl: "results.html",
    title: "Results"
  })

  $urlRouterProvider.otherwise("/");

}

export default OnConfig;
