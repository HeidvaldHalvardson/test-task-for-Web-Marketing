import {sortProducts} from "./sorting.js";

const cardTemplate = document.querySelector('#card').content.querySelector('.products__item');
const cardList = document.querySelector('.products__list');

const productCardRenderer = (data) => {
  cardList.innerHTML = '';
  sortProducts(data).map(item => {
    const cardItem = cardTemplate.cloneNode(true);
    
    cardItem.querySelector('.products__image').src = 'img/' + item.image;
    
    cardItem.querySelector('.products__title').textContent = item.title;

    cardItem.querySelector('.products__price').textContent = ((item.price_currency === 'EUR') ? '€ ' : '$ ') + item.price;
    
    cardItem.querySelector('#make').textContent = item.make;
    
    cardItem.querySelector('#model').textContent = item.model;
    
    cardItem.querySelector('#type').textContent = item.type;

    cardItem.querySelector('#power').textContent = item.power + ' ' + item.power_measure;
    
    cardItem.querySelector('#payload').textContent = item.payload;

    cardItem.querySelector('#gross-weight').textContent = item.gross_weight;

    cardItem.querySelector('#year').textContent = item.year;

    cardItem.querySelector('#mileage').textContent = item.mileage + ' ' + item.mileage_measure;
    
    cardItem.querySelector('#axle-config').textContent = item.axle_configuration;
    
    cardList.append(cardItem);
  })
};;

export {productCardRenderer};