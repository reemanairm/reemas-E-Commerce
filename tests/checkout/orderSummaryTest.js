import { loadFromStorage, cart } from "../../data/cart.js";
import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js"; // Ensure the correct path

describe('Test suite: renderOrderSummary',() => {

    let productid1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    let productid2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div> <div class="js-payment-summary"></div> `;
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productid: productid1,
                quantity: 2,
                deliveryoptionid: '1'
            }, {
                productid: productid2,
                quantity: 1,
                deliveryoptionid: '2'
            }]);
        });
        loadFromStorage();
        renderOrderSummary();
    });

    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('displays the cart',() => {
        expect(document.querySelectorAll('.js-cart-container').length).toEqual(2);
        expect(document.querySelector(`.js-cart-quantity-${productid1}`).innerText).toContain('Quantity: 2');
        expect(document.querySelector(`.js-cart-quantity-${productid2}`).innerText).toContain('Quantity: 1');
        expect(document.querySelector(`.js-product-name-${productid1}`).innerText).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(document.querySelector(`.js-product-price-${productid1}`).innerText).toEqual('$10.90');
    });

    it('removes a product',() => {
        document.querySelector(`.js-delete-link-${productid1}`).click();
        expect(document.querySelectorAll('.js-cart-container').length).toEqual(1);
        expect(document.querySelector(`.js-cart-container-${productid1}`)).toEqual(null);
        expect(document.querySelector(`.js-cart-container-${productid2}`)).not.toEqual(null);
        expect(document.querySelector(`.js-product-name-${productid2}`).innerText).toEqual('Intermediate Size Basketball');
        expect(cart.length).toEqual(1);
        expect(cart[0].productid).toEqual(productid2);
        expect(document.querySelector(`.js-product-price-${productid2}`).innerText).toEqual('$20.95');
    });

    it('updating delivery option', () => {
        document.querySelector(`.js-delivery-option-input-${productid1}-3`).click();
        expect(document.querySelector(`.js-delivery-option-input-${productid1}-3`).checked).toEqual(true);
        expect(cart.length).toEqual(2);
        expect(cart[0].deliveryoptionid).toEqual('3');

        expect(document.querySelector(`.js-payment-summary-shipping`).innerText).toEqual('$14.98');
        expect(document.querySelector(`.js-payment-summary-total`).innerText).toEqual('$63.50');
    });
});