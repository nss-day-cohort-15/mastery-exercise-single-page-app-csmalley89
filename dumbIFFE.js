var CarLot = (function (methodUpdate) {



  methodUpdate.changeSelected = function (targetElement, someColor){
      targetElement.classList.add('selected');
    }


    methodUpdate.resetsAll = function() {
      var allCard = document.querySelectorAll('.card');
      for (var i = allCard.length - 1; i >= 0; i--) {
        allCard[i].classList.remove('selected');
      }

    }

  return methodUpdate;
})(CarLot);
