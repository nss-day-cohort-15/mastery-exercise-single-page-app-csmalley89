var CarLot = (function (update) {



  update.activateEvents = function (){

        $('.card').ready(function(){
          $('.card').click(function(){
            $(this).toggleClass('selected');
            $("#userInput").focus();
            $('#userInput').on('keyup', function(){
              $('.card.selected > p').text($('#userInput').val());
        });
      });
    });

  }

  return update;
})(CarLot);



