//Articles service used for articles REST endpoint
angular.module('mean.shuos').factory("Shuos", ['$resource', function($resource) {
    return $resource('shuos/:shuoId', {
        shuoId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);