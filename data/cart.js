export const cart=[];

export function showcartquantity(){
  let cartquantity=0;
  cart.forEach((item)=>{cartquantity+=item.Quantity;});
  document.querySelector('.js-cart-quantity').innerHTML=cartquantity;
}
const addmessagetimeouts={};
export function timeset(productid){
  let add;
  let added;
  
  const previoustimeoutid=addmessagetimeouts[productid];
    add=document.querySelector(`.js-added-${productid}`);
    added=add.classList.add('js-add');


    if(previoustimeoutid){
      clearTimeout(previoustimeoutid);
    }
   const timeoutid= setTimeout(()=>{add.classList.remove('js-add');
   },2000);

   addmessagetimeouts[productid]=timeoutid; }


export function addtocart(productid){
  let select=document.querySelector(`.js-quantity-selector-${productid}`);
  let qnty=Number(select.value);
  let matchingitem;
  cart.forEach((item)=>{
    if(productid===item.productid){ 
      matchingitem=item;} 
    });
    if(matchingitem){
      matchingitem.Quantity+=qnty;}
    else{
      cart.push({
      productid:productid,
      Quantity:qnty});
       }
 
}