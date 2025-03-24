import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/car.js';
import '../data/backend-product.js';
import { loadStrorage } from '../data/products.js';

loadStrorage(() => {
    renderCheckoutHeader();
    renderPaymentSummary();
    renderOrderSummary();
});
