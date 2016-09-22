var app=angular.module('myApp',[]);
app.controller('MyController',['$scope',function($scope){
	$scope.name= 'Thiara deep';
	$scope.age=21;
	$scope.isSpy=true;
	$scope.empl = [
	{
		nam:'Deep',
		salary:20000,
		ge:20
	},
	{
		nam:'Ranvir',
		salary:10000,
		ge:18
	},
	{
		nam:'Rajir',
		salary:30000,
		ge:19
	}
	];
}]);