var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        var list= JSON.parse(this.responseText);
        inventory= list.cars;
        callback(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    },
    getInventory: function () {
      return inventory;
    }
  };

})();
