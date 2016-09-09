'use strict';
angular.module('AppointmentScheduler.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AppSchedulerCtrl', function($scope) {
  $scope.appointments = [
    { subject: 'Design Appointment', id: 1 },
    { subject: 'Development Meeting', id: 2 },
    { subject: 'BRD Review', id: 3 },
    { subject: 'SRS Review', id: 4 },
    { subject: 'User Interface Review', id: 5 },
    { subject: 'Others', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('AppSchedulerController', ['$scope', 'appointmentsFactory', 'baseURL', function($scope, appointmentsFactory, baseURL){
    $scope.baseURL = baseURL;
    $scope.appointments = appointmentsFactory.query().$promise.then(
                            function(response){
                                $scope.appointments = response;  
                            },
                            function(response) {
                                console.log('Error happened while retrieving response');
                            }
                        );;
    console.log($scope.appointments);
}])
.controller('HomeController',['$scope', function($scope){
        $scope.tab = 1;
    $scope.displayText = "My Schedule";
      $scope.select = function(setTab) {
                $scope.tab = setTab;
                if (setTab === 1) {
                    $scope.displayText = "My Schedule";
                }
                else if (setTab === 2) {
                    $scope.displayText = "My Connections";
                }
                else if (setTab === 3) {
                    $scope.displayText = "My Offers";
                }
                else if (setTab === 4) {
                    $scope.displayText = "Other topics";
                }
                else {
                    $scope.displayText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
}])
;
