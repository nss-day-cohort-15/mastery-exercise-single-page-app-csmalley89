var CarLot = (function (update) {



  update.activateEvents = function (){
    $(document).ready(function(){

      // Applies selected class to clicked card and places cursor in textbox
      $('.card').click(function(){
        $(this).toggleClass('selected');
        $("#userInput").focus();
      });

      // Takes user input and replaces selected card description
      $('#userInput').on('keyup', function(){
        $('.card.selected > p').text($('#userInput').val());
      });

      // Clears the value of input box after user clicks update
      $('#saveButton').click(function(){
        $('#userInput').val(' ');
        $('.card').removeClass('selected');
      });

      // Prevents the user from using the enter key
      $('#userInput').keypress(function(e){
        if(e.which == 13){
          return false;
        }
      });
    })

  }

  return update;
})(CarLot);
