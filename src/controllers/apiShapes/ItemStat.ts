export function ItemStatsShape(itemStats: any) {
    return {
      id: itemStats && itemStats.id,
      supplier: itemStats && itemStats.supplier,
      costPrice: itemStats && itemStats.costPrice,
      salesPrice: itemStats && itemStats.salesPrice,
      manuDate: itemStats && itemStats.manuDate,
      expDate: itemStats && itemStats.expDate,
      quantity: itemStats && itemStats.quantity
    };
  }