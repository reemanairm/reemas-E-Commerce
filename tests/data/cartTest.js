import {addtocart, cart, loadFromStorage, removefromcart} from '../../data/cart.js';


describe('test suite: addtoCart',() => {
    
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds an existing product to the cart',() => {
        

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'}]);
        });
        loadFromStorage();

        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryoptionid: '1'
          }]));
        expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });



    it('adds a new product to the cart',() => {

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();


        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'
          }]));
    });
});

describe('Test suite: Remove from cart',() => {

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('remove a product from the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'}]);
        });
        loadFromStorage();

        removefromcart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([]));
    });

    it('does nothing if product is not in the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'}]);
        });
        loadFromStorage();

        removefromcart('does-noy-exist');
        expect(cart.length).toEqual(1);
        expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'
          }]));
    })
});