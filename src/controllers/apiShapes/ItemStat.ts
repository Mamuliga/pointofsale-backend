export function ItemStatsShape(itemStats: any) {
  return {
    id: itemStats && itemStats.id,
    supplierId: itemStats && itemStats.supplierId,
    itemId: itemStats && itemStats.itemId,
    costPrice: itemStats && itemStats.costPrice,
    salesPrice: itemStats && itemStats.salesPrice,
    manuDate: itemStats && itemStats.manuDate,
    expDate: itemStats && itemStats.expDate,
    quantity: itemStats && itemStats.quantity,
  };
}

export function ItemStatShape(itemStats: any) {
  return {
    id: itemStats && itemStats.id,
    costPrice: itemStats && itemStats.costPrice,
    salesPrice: itemStats && itemStats.salesPrice,
    manuDate: itemStats && itemStats.manuDate,
    expDate: itemStats && itemStats.expDate,
    quantity: itemStats && itemStats.quantity,
    supplier: itemStats && itemStats.supplier,
    item: itemStats && itemStats.item,
  };
}

export function ItemSearchShape(itemStats: any) {
  return {
    id: itemStats && itemStats.id,
    salesPrice: itemStats && itemStats.salesPrice,
    manuDate: itemStats && itemStats.manuDate,
    expDate: itemStats && itemStats.expDate,
    quantity: itemStats && itemStats.quantity,
    supplier: {
      id: itemStats && itemStats.supplier.id,
      email: itemStats && itemStats.supplier.email,
      phoneNo: itemStats && itemStats.supplier.phoneNo,
    },
    item: {
      id: itemStats && itemStats.item.id,
      barcode: itemStats && itemStats.item.barcode,
      itemName: itemStats && itemStats.item.itemName,
      description: itemStats && itemStats.item.description,
    },
  };
}
