(function() {
    'use strict';

    angular
        .module('wb-toaster', [
            'ngMaterial'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('wb-toaster')
        .factory('toasterService', toasterService);

    toasterService.$inject = ['$mdToast'];

    /* @ngInject */
    function toasterService($mdToast) {
        var delay = 2000;
        var position = 'bottom right';
        var service = {
            simple: simple,
            action: action
        };

        return service;

        function simple(content) {
            return show(build(content));
        }

        function action(content, action, callback) {
            return show(
                build(content).action(action)
            ).then(callback);
        }

        function show(options) {
            return $mdToast.show(options);
        }

        function build(content) {
            return $mdToast.simple()
                .textContent(content)
                .position(position)
                .hideDelay(delay);
        }
    }
})();
