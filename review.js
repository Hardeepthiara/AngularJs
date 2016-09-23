var app=angular.module('reviewApp',[]);
app.controller('MyController',['$scope',function($scope){
	$scope.name= 'Thiara deep';
	$scope.age=21;
	$scope.count=0;
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


	$scope.form={};
	$scope.addReview=function(){
		$scope.reviews.push($scope.form);
		$scope.form={
		};
		}


	$scope.reviews=[
	{
		comments:'Hey dear its nice',
		by:'Joe@gmail.com'
	},
	{
		comments:'What is this?',
		by:'Michel@gmail.com'
	}
	];
}]);
app.directive('userinfo',function(){
	return{
		restrict:'E',
		templateUrl:'user.html'
	};
});