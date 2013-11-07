angular.module('mean.shuos').controller('ShuosController', ['$scope','$location','Global', 'Shuos', function ($scope,$location,Global,Shuos) {
    $scope.global = Global;

    $scope.create = function() {

        if(window.imgInterFaceReturn){
            var shuo = new Shuos({
                content: this.content,
                img    : window.imgInterFaceReturn
            });

        }else{
            var shuo = new Shuos({
                content: this.content
            });         
        }
        shuo.$save(function(response) {
            window.location="/";
        });
        this.content = "";
        window.imgInterFaceReturn=null;
    };

    $scope.remove = function(shuo) {
        shuo.$remove();  

        for (var i in $scope.shuos) {
            if ($scope.shuos[i] == shuo) {
                $scope.shuos.splice(i, 1);
            }
        }
    };

    $scope.find = function() {
        Shuos.query(function(shuos) {
            $scope.shuos = shuos;
            console.log(shuos);
        });
    };

}]);