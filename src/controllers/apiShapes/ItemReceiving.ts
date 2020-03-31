export function ItemReceivingShape(itemReceiving: any) {
    return {
      id: itemReceiving && itemReceiving.id,
      costPrice: itemReceiving && itemReceiving.costPrice,
      salePrice: itemReceiving && itemReceiving.salePrice,
      revDate: itemReceiving && itemReceiving.revDate,
      quantity: itemReceiving && itemReceiving.quantity
    };
  }
