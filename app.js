/**
 * Created by jamador on 4/9/16.
 */

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })

        .when('/resume', {
            templateUrl: 'partials/resume.html'
        })
        
        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html'
        })
        
        .when('/tools', {
            templateUrl: 'partials/tools.html'
        })

        .when('/contact', {
            templateUrl: 'partials/contact.html'
        })

        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});

app.directive('slideUp', function() {
    var link = function(scope, element) {
        element.on('click', function() {
            var divid = $(this).attr("id");
            if ($("#" + divid + "pdf").css("display") == "none") {
                if ($("#" + divid + "_obj").length) {
                    $("#" + divid + "pdf").slideDown();
                }
                else {
                    $("#" + divid + "pdf").append('<object data="./src/syllabi/' + divid + '.pdf" id="' + divid + '_obj" type="application/pdf" width="100%" height="300px"><p>It appears you don\'t have a PDF plugin for this browser.<br /> No biggie... you can <a href="syllabi/' + divid + '.pdf">click here to download the PDF file</a> instead.</p></object>');
                    $("#" + divid + "pdf").slideDown();
                }
            }
            else {
                $("#" + divid + "pdf").slideUp();
            }
        });
    };

    return {
        restrict: 'A',
        link: link
    };
});