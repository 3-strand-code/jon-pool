/**
 * Created by Jon on 8/23/2015.
 */
angular.module('cardApp', [])
    .controller('CardListController', function() {
        var cardList = this;
        cardList.cards = [
            {text:'Card 1'},
            {text:'Card 2'},
            {text:'Card 3'}];

    });
