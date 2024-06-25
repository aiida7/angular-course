'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

// Service
function ShoppingListCheckOffService() {
    var service = this;

    // List of items to buy
    var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 5 },
        { name: "sodas", quantity: 8 },
        { name: "apples", quantity: 6 },
        { name: "bananas", quantity: 7 }
    ];

    // List of bought items
    var boughtItems = [];

    service.getToBuyItems = function() {
        return toBuyItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };

    service.buyItem = function(itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1)[0];
        boughtItems.push(item);
    };
}
