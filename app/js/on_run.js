function OnRun($rootScope, AppSettings) {
  "ngInject";

  // Change page title based on state
  $rootScope.$on("$stateChangeSuccess", (event, toState) => {
    
    $rootScope.pageTitle = "";

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += " \u2014 ";
    }

    $rootScope.pageTitle += AppSettings.appTitle;
    
  });

}

export default OnRun;
