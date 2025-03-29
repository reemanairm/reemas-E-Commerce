import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/car.js';
import '../data/backend-product.js';
import { loadProductFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

Promise.all([
    loadProductFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })
]).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderPaymentSummary();
    renderOrderSummary();
});
