export function ItemReceivingShape(itemReceiving: any) {
    return {
      id: itemReceiving && itemReceiving.id,
      receiveId: itemReceiving && itemReceiving.receiveId,
      receive: itemReceiving && itemReceiving.receive,
      itemId: itemReceiving && itemReceiving.itemId,
      receivePrice: itemReceiving && itemReceiving.receivePrice,
      item: itemReceiving && itemReceiving.item,
      discount: itemReceiving && itemReceiving.discount,
      qty: itemReceiving && itemReceiving.qty,
      description: itemReceiving && itemReceiving.description
    };
  }
