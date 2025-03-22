import {addtocart, cart, loadFromStorage, removefromcart, updateDeliveryoption} from '../../data/cart.js';

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

        removefromcart('does-not-exist');
        expect(cart.length).toEqual(1);
        expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'
          }]));
    });
});

describe('Test suite: update delivery option',() => {
   beforeEach(() => {
       spyOn(localStorage, 'setItem');
   });

   it('updates the delivery option',() => {
   spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryoptionid: '1'
          }]); 
        });
        loadFromStorage();

    updateDeliveryoption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryoptionid).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryoptionid: '3'
      }]));
   
});

    it('does nothing if the product is not in the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryoptionid: '1'
            }]);
        });
        loadFromStorage();
            
            updateDeliveryoption('does-not-exist', '3');
            expect(cart.length).toEqual(1);
            expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
            expect(cart[0].quantity).toEqual(1);           
            expect(cart[0].deliveryoptionid).toEqual('1');
            expect(localStorage.setItem).toHaveBeenCalledTimes(0);
        

    });

    it('does nothing if the delivery option does not exist', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryoptionid: '1'
            }]);
        });
        loadFromStorage();
            
            updateDeliveryoption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
            expect(cart.length).toEqual(1);
            expect(cart[0].productid).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
            expect(cart[0].quantity).toEqual(1);           
            expect(cart[0].deliveryoptionid).toEqual('1');
            expect(localStorage.setItem).toHaveBeenCalledTimes(0);
        

    });

});