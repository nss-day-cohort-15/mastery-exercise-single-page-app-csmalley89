

function populatePage (cars) {

  // Loop over the inventory and populate the page
  var output = document.getElementById("car-inventory")
  var carInventory = "";
  var carCard;
  var looper = cars.length;

  carInventory += `<div class="row">`;

  for (var i = 0; i < looper; i++) {
      carCard = cars[i];

      carInventory += `<div class="col-md-4 unselected" id="${carCard.make}-${carCard.model}" style="border-color:${carCard.color}">`;
      carInventory += `<h3>${carCard.year} ${carCard.make} ${carCard.model}</h3>`;
      carInventory += `<h4>Mileage: ${carCard.mileage}</h4>`;
      carInventory += `<h4>Color: ${carCard.color}</h4>`
      carInventory += `<h4>Price: $${carCard.price}</h4>`;
          if (!carCard.purchased) {
              carInventory += `<h4>Availible</h4>`;
            } else {
              carInventory += `<h4>Sold</h4>`;
          }

        carInventory += `</div>`;
        output.innerHTML = carInventory;

  }
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
