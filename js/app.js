var app = angular.module('LearnNJ', ['ionic','ionic-material','ngCordova','ngStorage','ion-fab-button'])

.controller('appCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  });
    

app.run(function($ionicPlatform,$timeout,$cordovaToast,$localStorage,$location) {
  
    $ionicPlatform.ready(function() {

        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
    });

    var backbutton = 0;

    $ionicPlatform.registerBackButtonAction(function() {
        if(backbutton == 0){
          backbutton++;          
          $cordovaToast.showShortCenter('Press again to exit');          
          $timeout(function(){
            backbutton = 0;
          },3000);
        }else{
          navigator.app.exitApp();
        }
    }, 100);

});

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);


    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller:'appCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'                
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.intro', {
        url: '/intro',
        title:'Introduction',
        views: {
            'menuContent': {
                templateUrl: 'templates/introduction.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.setup', {
        url: '/setup',
        title:'Environment Setup',
        views: {
            'menuContent': {
                templateUrl: 'templates/setup.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.firstapp', {
        url: '/firstapp',
        title:'First Application',
        views: {
            'menuContent': {
                templateUrl: 'templates/firstapplication.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.terminal', {
        url: '/terminal',
        title:'REPL Terminal',
        views: {
            'menuContent': {
                templateUrl: 'templates/terminal.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.npm', {
        url: '/npm',
        title:'Package Manager NPM',
        views: {
            'menuContent': {
                templateUrl: 'templates/npm.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.callback', {
        url: '/callback',
        title:'Callback Concept',
        views: {
            'menuContent': {
                templateUrl: 'templates/callback.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.eventloop', {
        url: '/eventloop',
        title:'Event Loop',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventloop.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.eventemitter', {
        url: '/eventemitter',
        title:'Event Emitter',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventemitter.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.buffers', {
        url: '/buffers',
        title:'Buffers',
        views: {
            'menuContent': {
                templateUrl: 'templates/buffers.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.streams', {
        url: '/streams',
        title:'Streams',
        views: {
            'menuContent': {
                templateUrl: 'templates/streams.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.filesystem', {
        url: '/filesystem',
        title:'File System',
        views: {
            'menuContent': {
                templateUrl: 'templates/filesystem.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.globalobjects', {
        url: '/globalobjects',
        title:'Global Objects',
        views: {
            'menuContent': {
                templateUrl: 'templates/globalobjects.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.utilitymodule', {
        url: '/utilitymodule',
        title:'Utility Module',
        views: {
            'menuContent': {
                templateUrl: 'templates/utilitymodule.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.webmodule', {
        url: '/webmodule',
        title:'Web Module',
        views: {
            'menuContent': {
                templateUrl: 'templates/webmodules.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.expressframework', {
        url: '/expressframework',
        title:'Express Framework',
        views: {
            'menuContent': {
                templateUrl: 'templates/expressframework.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.restful', {
        url: '/restful',
        title:'RESTFul Service',
        views: {
            'menuContent': {
                templateUrl: 'templates/restful.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.scalingapp', {
        url: '/scalingapp',
        title:'Scaling Application',
        views: {
            'menuContent': {
                templateUrl: 'templates/scalingapp.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.packaging', {
        url: '/packaging',
        title:'Packaging',
        views: {
            'menuContent': {
                templateUrl: 'templates/packaging.html'
            },
            'fabContent': {
                template: '<button id="fab-activity" ng-controller="favCtrl" ng-click="addFav()" class="button button-fab button-fab-top-right expanded button-energized-900 "><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 300);
                }
            }
        }
    })

    .state('app.favourite', {
        url: '/favourite',
        views: {
            'menuContent': {
                templateUrl: 'templates/favourite.html',
                controller : 'favCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',
                controller:'appCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    $urlRouterProvider.otherwise('/app/home');

});


app.controller('favCtrl',function($state,$scope,$timeout,$ionicPopup,$cordovaToast,$ionicLoading,$ionicModal,$localStorage){
    function checkFav(){
        var tmp    = localStorage.getItem('favourite');
        var fav   = JSON.parse(tmp);        
        var length = Object.keys(fav).length;
        //console.log(length);
        //console.log(fav);

        for (var i = 0; i < length; i++) {
            //console.log(fav[i].name);
            //console.log($state.current.name);

            if(fav[i].name == $state.current.name){
                //console.log('Already Exists');
                return false;
                break;
            }

        }
    }
    $scope.addFav = function(){
        //console.log($state.current.title,$state.current.name);
        var temp   = [];
        var tmp    = localStorage.getItem('favourite');
        if(tmp != null){
            if(checkFav() != false){
                var favourite = {
                  title : $state.current.title,
                  name  : $state.current.name
                };
                tmp = JSON.parse(tmp);
                for(i=0; i<tmp.length; i++){
                  temp.push(tmp[i]) ;
                }
                temp.push(favourite);
                console.log(temp);
                localStorage['favourite'] = JSON.stringify(temp);        
                console.log(localStorage['favourite']);
                $cordovaToast.showLongBottom('Added to Favourite list.').then(function(success) {
                  //window.location.reload(true);
                }, function (error) {
                  $cordovaToast.showShortBottom('Not Added, Try Again!');
                });                 
            }else{
                console.log('Already Exist in favourite list.')
                $cordovaToast.showShortCenter('Already Exist in favourite list.');
            }  
        }else{
            var favourite = [{
                title : $state.current.title,
                name  : $state.current.name
            }];
            console.log(favourite);
            localStorage['favourite'] = JSON.stringify(favourite);        
            console.log(localStorage['favourite']);
            $cordovaToast.showShortBottom('Added to Favourite list.').then(function(success) {
              //window.location.reload(true);
            }, function (error) {
              $cordovaToast.showShortBottom('Not Added, Try Again!');
            });
        }                   
    }

    $scope.getFav = function(){
        $ionicLoading.show({showBackdrop:false,template:'Loading..'});
        $timeout(function(){
            $scope.saved     = localStorage.getItem('favourite');
            $scope.favourite = JSON.parse($scope.saved);
            $ionicLoading.hide();
        },500);
    }

    $scope.showConfirm = function(index,id) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm Delete',
      template: 'Are you sure you want to delete the favourite?',
      okType:'button-assertive'
     });
     confirmPopup.then(function(res) {
      if(res){
        $scope.onFavDelete(index);
        $cordovaToast.showLongBottom('Favourite deleted successfully').then(function(success) {
          $scope.getFav();
        }, function (error) {
          $cordovaToast.show('Favourite not deleted.Try Again', 'short', 'center');
        });  
      }else{
        console.log('You are not sure');
      }
    });
   }

    $scope.onFavDelete = function(index){
      var fav   = JSON.parse(localStorage.getItem('favourite'));  
      fav.splice(index,1);
      localStorage["favourite"] = JSON.stringify(fav);
      $scope.favorite = JSON.parse($scope.saved);
    };

});
