import {cart,showcartquantity} from '../../data/cart.js';
import { getproduct } from '../../data/products.js';
import { getdeliveryoption } from '../../data/deliveryoptions.js';
import { formatcurrency } from '../utils/money.js';
import { addOrder } from '../../data/order.js';

export function renderPaymentSummary(){
   let productPriceCents=0;
   let shippingPriceCents=0;
   let cartquantity = 0;
    
  cart.forEach((item) => {
    cartquantity += item.quantity;
   }); 

   cart.forEach((cartitem) => {
    const product=getproduct(cartitem.productid);
    productPriceCents += product.priceCents * cartitem.quantity;

    const deliveryoption = getdeliveryoption(cartitem.deliveryoptionid);
    shippingPriceCents += deliveryoption.priceCents;
   });

 const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
 const taxCents = totalBeforeTaxCents * 0.1;
 const totalCents = totalBeforeTaxCents + taxCents;

 const paymentSummaryHTML = `  <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartquantity}):</div>
            <div class="payment-summary-money">$${formatcurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money js-payment-summary-shipping">$${formatcurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatcurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatcurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money js-payment-summary-total">$${formatcurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
        </div>`;

    document.querySelector('.js-payment-summary').innerHTML= paymentSummaryHTML;

    document.querySelector('.js-place-order').addEventListener('click', async () => {
      try{
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers: {
            'Content-type': 'applications/json'
          },
          body: JSON.stringify({
            cart: cart
          })
        });

        const order = await response.json();
        addOrder(order);

    
      }

      catch (error) {
        console.log('Unexpected Error: Try again later');
      }
        
    window.location.href = 'orders.html';});
  }
