import {cart,removefromcart, updatequantity} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatcurrency } from './utils/money.js';
let cartsummary='';
cart.forEach((cartitem)=>{
const productid=cartitem.productid;

let matchingproduct;
products.forEach((product)=>{
if(product.id===productid){
  matchingproduct=product;
}});


cartsummary+=`<div class="cart-item-container js-cart-container-${matchingproduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingproduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingproduct.name}
        </div>
        <div class="product-price">
          $${formatcurrency(matchingproduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label js-quantity-label-${matchingproduct.id}">${cartitem.Quantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingproduct.id}">
            Update
          </span> <input class="quantity-input"> <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingproduct.id}">Save</span>
         
          
           <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingproduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

document.querySelector('.js-order-summary').innerHTML=cartsummary;

document.querySelectorAll('.js-delete-link').
forEach((link)=>{link.addEventListener
  ('click',()=>{ 
  const productid=link.dataset.productId;
  removefromcart(productid);

  const container= document.querySelector(`.js-cart-container-${productid}`);
  container.remove();
  showcartquantity();
   });
});

function showcartquantity(){
  let cartquantity=0;
  cart.forEach((item)=>{cartquantity+=item.Quantity;});
  document.querySelector('.js-checkout').innerHTML=`${cartquantity} items`;
}



showcartquantity();


document.querySelectorAll('.js-update-link').
forEach((link)=>{link.addEventListener
  ('click',()=>{ 
    const productid=link.dataset.productId;
    const container=document.querySelector(`.js-cart-container-${productid}`);
    container.classList.add('is-editing');  
  });
});


document.querySelectorAll('.js-save-link').
forEach((link)=>{link.addEventListener
  ('click',()=>{ 
    const productid=link.dataset.productId;
    const save=document.querySelector(`.js-cart-container-${productid}`);
    save.classList.remove('is-editing');
    const input=document.querySelector(`.js-cart-container-${productid} .quantity-input`);
    const newQuantity=Number(input.value);
    
    updatequantity(productid,newQuantity);

    const quantitylabel=document.querySelector(`.js-quantity-label-${productid}`);
    quantitylabel.innerHTML=newQuantity;
    document.querySelector('.js-checkout').innerHTML=newQuantity;
    showcartquantity();
    
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.js-save-link').forEach((link) => {
    const productid = link.dataset.productId;
    const quantityinput = document.querySelector(`.js-cart-container-${productid} .quantity-input`);
    
    // Click event
    link.addEventListener('click', () => {
      handleUpdateQuantity(productid, quantityinput);
    });
    
    // Keydown event
    quantityinput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleUpdateQuantity(productid, quantityinput);
      }
    });
  });
});

function handleUpdateQuantity(productid, quantityinput) {
  const newQuantity = Number(quantityinput.value);

  if (newQuantity <= 0 || newQuantity >= 1000) {
    alert('Quantity must be at least 1 and less than 1000');
    return; // early return
  }

  updatequantity(productid, newQuantity);

  const quantityLabel = document.querySelector(`.js-quantity-label-${productid}`);
  quantityLabel.innerHTML = newQuantity;

  showcartquantity();

  const container = document.querySelector(`.js-cart-container-${productid}`);
  container.classList.remove('is-editing');
}
