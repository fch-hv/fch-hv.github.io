require.config({
    
    baseUrl: "node_modules",
    
    paths: {
        'app':'../app',
        'angular': 'angular/angular.min',
        'angular-amd': 'angular-amd/angularAMD.min',
        'angular-route': 'angular-route/angular-route',
        'jquery': 'jquery/dist/jquery.min',
        'bootstrap': 'bootstrap/dist/js/bootstrap.min',
        'wow': 'wow/wow.min',
        'tpls':'bootstrap-tpls/tpls'
    },

    shim: { 
            angular: {
                exports: "angular"
            },

            'angular-amd': ['angular'],
            'angular-route': ['angular'],
            'tpls': ['angular'],
            'bootstrap': ['jquery']
         },
    deps: ['app']
});


