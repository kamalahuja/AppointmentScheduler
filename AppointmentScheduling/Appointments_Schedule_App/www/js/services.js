'use strict';

angular.module('AppointmentScheduler.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .factory('appointmentsFactory',['$resource', 'baseURL', function($resource, baseURL){
            return $resource(baseURL+"meetings");
        }])

;
