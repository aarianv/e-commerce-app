export const deliveryTypes = [{
    id: '1',
    deliveryTime: 7,
    pricePence: 0,
}, {
    id: '2',
    deliveryTime: 3,
    pricePence: 499
}, {
    id: '3',
    deliveryTime: 1,
    pricePence: 999
}];

export function getDeliveryType(deliveryTypeId) {
    let deliveryType;

    deliveryTypes.forEach((type) => {
      if (type.id === deliveryTypeId) {
        deliveryType = type;
      }
    });

    return deliveryType;
}