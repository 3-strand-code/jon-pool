/**
 * Created by Jon on 9/10/2015.
 */
angular.module('App', [
    'App.Card'
])
    .controller('CardListController', function() {
        var cardList = this;
        cardList.cards = [
            {text:'Card 1', notes:[{noteText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, ex in sollicitudin mollis, nunc velit imperdiet neque, ac congue tellus dui nec lacus. Morbi enim enim, blandit sed tristique vitae, sagittis malesuada nibh. Suspendisse potenti. Donec euismod pellentesque ante at consequat. Nunc tincidunt aliquam interdum. Maecenas ut metus sit amet justo facilisis accumsan ac ac orci. Aliquam erat volutpat. Nam tempus sollicitudin scelerisque'},
                {noteText:'Pellentesque sed leo arcu. Duis nec posuere diam. Suspendisse id eros ac justo vulputate blandit eu et magna. Nunc ipsum erat, commodo lobortis enim a, accumsan fringilla nisl. Praesent malesuada sit amet mauris sit amet egestas. Sed in mauris tellus. Nullam tincidunt, urna sit amet vestibulum lacinia, tortor nulla congue est, ac luctus lectus urna id augue. Aenean sapien libero, ullamcorper in aliquam et, condimentum sit amet justo. Aliquam vitae rutrum urna. Curabitur sed ex ac nunc laoreet euismod. Vestibulum diam enim, aliquam nec tellus non, ornare bibendum felis. Sed ut ligula a ex laoreet auctor. Nam aliquet consequat efficitur. Phasellus est est, pellentesque non purus ut, sagittis vehicula mauris'}]},
            {text:'Card 2', notes:[{noteText:'text 1'},{noteText:'text 2'}]},
            {text:'Card 3', notes:[{noteText:'text 1'},{noteText:'text 2'}]}
        ]
    });
