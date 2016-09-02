define(['jquery',
		'angular',
		'angular-amd',
		'angular-route',
		'bootstrap',
		'wow'
		], 
		function ($, angular, angularAMD, angularRoute, bootstrap) {
		    var app = angular.module("webapp", ['ngRoute']);
		    
		    app.constant("url", {
		    	//'environment': 'http://localhost:53740/'
		    	//'environment': 'http://ec2-52-11-118-155.us-west-2.compute.amazonaws.com/'
		    });

		    app.config(function ($routeProvider, $provide) {
		    	app.factory    = $provide.factory;

		        $routeProvider.when("/", angularAMD.route({
		            templateUrl: 'js/views/home.html', controller: 'HomeCtrl',
		            controllerUrl: '../js/controllers/home.controller'
		        }));

		        $routeProvider.when("/home", angularAMD.route({
		            templateUrl: 'js/views/home.html', controller: 'HomeCtrl',
		            controllerUrl: '../js/controllers/home.controller'
		        }));

		        $routeProvider.when("/sf", angularAMD.route({
		            templateUrl: 'js/views/softwareFactory.html', controller: 'SfCtrl',
		            controllerUrl: '../js/controllers/sf.controller'
		        }));

		        $routeProvider.when("/institucional", angularAMD.route({
		            templateUrl: 'js/views/institucional.html', controller: 'InstitucionalCtrl',
		            controllerUrl: '../js/controllers/institucional.controller'
		        }));

		         $routeProvider.when("/contacto", angularAMD.route({
		            templateUrl: 'js/views/contacto.html', controller: 'ContactoCtrl',
		            controllerUrl: '../js/controllers/contacto.controller'
		        }));
		    });
		      
		    return angularAMD.bootstrap(app);
		});