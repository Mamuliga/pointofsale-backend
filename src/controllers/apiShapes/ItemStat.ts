export function ItemStatsShape(itemStats: any) {
    return {
      id: itemStats && itemStats.id,
      supplierId: itemStats && itemStats.supplierId,
      itemId: itemStats && itemStats.itemId,
      costPrice: itemStats && itemStats.costPrice,
      salesPrice: itemStats && itemStats.salesPrice,
      manuDate: itemStats && itemStats.manuDate,
      expDate: itemStats && itemStats.expDate,
      quantity: itemStats && itemStats.quantity
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