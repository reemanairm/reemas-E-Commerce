import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/car.js';
import '../data/backend-product.js';
import { loadProductFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';


async function loadPage() {

    try{

    await loadProductFetch();
//stroring to value to get 'value2' in resolve rather using .then to access it.
  const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value2'); 
        });
});
 
} catch (error){
    console.log('Unexpected Error: Please try again after sometime');
}

    renderCheckoutHeader();
    renderPaymentSummary();
    renderOrderSummary();

}

loadPage();









/*Promise.all([
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
});*/
