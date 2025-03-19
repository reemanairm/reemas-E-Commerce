export const deliveryoptions=[{
  id:'1',
  deliveryDays: 7,
  priceCents:0
},{
  id:'2',
  deliveryDays:3,
  priceCents:499
},{
  id:'3',
  deliveryDays:1,
  priceCents:999
}]

export function getdeliveryoption(deliveryoptionid){
  let deliveryoption;

  deliveryoptions.forEach((option)=>{
    if(option.id === deliveryoptionid){
      deliveryoption = option;
    }
  });
  return deliveryoption || deliveryoption[0];
}