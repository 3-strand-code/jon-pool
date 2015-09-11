/**
 * Created by Jon on 9/10/2015.
 */
function Card(){
    var definition= {
        restrict: "E",
        replace: true,
        templateUrl: "components/card/card.html",
        scope: {},
        // TODO: finish link function
        link: function (scope, elm, attrs){
            scope.foo = 'bar';
        }
    };
    return definition;
}