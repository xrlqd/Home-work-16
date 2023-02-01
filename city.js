var app = angular.module('cityApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
	$routeProvider
	.when('/ten', {
		templateUrl: "index.html",
		controller: "tenCtrl"
	})
	.when('/eleven', {
		templateUrl: "index.html",
		controller: "elevenCtrl"
	})
	.when('/twelve', {
		templateUrl: "index.html",
		controller: "twelveCtrl"
	})
	.when('/thirteen', {
		templateUrl: "index.html",
		controller: "thirteenCtrl"
	})
	.when('/fourteen', {
		templateUrl: "index.html",
		controller: "fourteenCtrl"
	})
});


app.controller("tenCtrl",function($scope, $route){
	$scope.phone = {
		name: "Iphone XS Max",
		released: 2018,
		display: 6.5,
		CPU: "Apple A12 Bionic",
		battery: "2658mAh",
		maincamera: "Double 12Mpx",
		frontcamera: "7Mpx",
		os: "IOS 12",
		price: "360$"
	}
});
app.controller("elevenCtrl",function($scope, $route){
	$scope.phone = {
		name: "Iphone 11 Pro Max",
		released: 2019,
		display: 6.5,
		CPU: "Apple A13 Bionic",
		battery: "3190mAh",
		maincamera: "12Mpx + 12Mpx + 12Mpx",
		frontcamera: "12Mpx",
		os: "IOS 13",
		price: "690$"
	}
});
app.controller("twelveCtrl",function($scope, $route){
	$scope.phone = {
		name: "Iphone 12 Pro Max",
		released: 2020,
		display: 6.7,
		CPU: "Apple A14 Bionic",
		battery: "3687mAh",
		maincamera: "12Mpx + 12Mpx + 12Mpx",
		frontcamera: "12Mpx",
		os: "IOS 14",
		price: "812$"
	}
});
app.controller("thirteenCtrl",function($scope, $route){
	$scope.phone = {
		name: "Iphone 13 Pro Max",
		released: 2021,
		display: 6.7,
		CPU: "Apple A15 Bionic",
		battery: "4352mAh",
		maincamera: "12Mpx + 12Mpx + 12Mpx",
		frontcamera: "12Mpx",
		os: "IOS 15",
		price: "1110$"
	}
});
app.controller("fourteenCtrl",function($scope, $route){
	$scope.phone = {
		name: "Iphone 14 Pro Max",
		released: 2022,
		display: 6.7,
		CPU: "Apple A16 Bionic",
		battery: "4323mAh",
		maincamera: "48Mpx + 12Mpx + 12Mpx + 12Mpx",
		frontcamera: "12Mpx",
		os: "IOS 16",
		price: "1760$"
	}
});