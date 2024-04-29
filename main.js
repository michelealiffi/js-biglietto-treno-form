'use strict';

 const button = document.getElementById("confirm");

 button.addEventListener('click', function() {
   
      let userName = document.getElementById("name").value;
      
      const kmToGo = parseInt(document.getElementById("km").value);
      
      let userAge = document.getElementById("age").selectedOptions[0].value;
      if(userAge == 'Minorenne') {
         userAge = 16;
      
      } else if (userAge == 'Over 65') {
         userAge = 70;
      
      } else {
         userAge = 20;
      
      }

      let userNameChoice = document.getElementById("nameChoice");
      userNameChoice.innerHTML = userName;


      const kmPrice = kmToGo*0.21;

      let price = 0;
      let priceSold = 0;

      if(userAge < 18) {
         priceSold = ((20/100)*kmPrice);

      } else if (userAge > 65) {
         priceSold = ((40/100)*kmPrice);

      }

      price = kmPrice - priceSold;

      price = (Math.round(price * 100) / 100).toFixed(2);

      const htmlTicket = document.getElementById('ticket-price');

      htmlTicket.innerHTML = price;

      console.log(price);

   }
);