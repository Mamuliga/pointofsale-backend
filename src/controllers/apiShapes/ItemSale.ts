export function ItemSaleShape(itemSale: any) {
    return {
      id: itemSale && itemSale.id,
      saleId: itemSale && itemSale.saleId,
      sellingPrice: itemSale && itemSale.sellingPrice,
      discount: itemSale && itemSale.discount,
      quantity: itemSale && itemSale.quantity,
      description: itemSale && itemSale.description,
    };
  }