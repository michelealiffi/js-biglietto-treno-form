'use strict';

const kmToGo = parseInt(prompt('Inserisci i Km da percorrere'));

const userAge = Number(prompt('Inserire la propria età'));

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