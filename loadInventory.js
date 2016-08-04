var CarLot = (function (update) {



  update.activateEvents = function (){
    var selectedBackgroundColor = `#ccf5ff`;

      // Applies selected class to clicked card and places cursor in textbox
      var allCard = document.querySelectorAll('.card');
      var userInput = document.getElementById('userInput');

      for (var i = allCard.length - 1; i >= 0; i--) {
        allCard[i].addEventListener('click', function(event){
          update.resetsAll()
          update.changeSelected(event.currentTarget, selectedBackgroundColor);
          userInput.focus();
        })
      }

      // Takes user input and replaces selected card description
      userInput.addEventListener('keyup', function(){
      var descr = document.querySelector('.card.selected > p');
      descr.innerText = userInput.value;
      });

      // // Clears the value of input box after user clicks update
      // $('#saveButton').click(function(){
      //   $('#userInput').val(' ');
      //   $('.card').removeClass('selected');
      // });

      // // Prevents the user from using the enter key
      // $('#userInput').keypress(function(e){
      //   if(e.which == 13){
      //     return false;
      //   }
      // });




  }

  return update;
})(CarLot);
