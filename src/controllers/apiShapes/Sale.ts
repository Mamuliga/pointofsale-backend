export function SalesShape(sale: any) {
  return {
    id: sale && sale.id,
    customerId: sale && sale.customerId,
    total: sale && sale.total,
    totlaDiscount: sale && sale.totlaDiscount,
    paymentType: sale && sale.paymentType,
    payedAmount: sale && sale.payedAmount,
    balance: sale && sale.balance,
  };
}

export function SaleShape(sale: any) {
  return {
    id: sale && sale.id,
    customer: sale && sale.customer,
    total: sale && sale.total,
    totlaDiscount: sale && sale.totlaDiscount,
    paymentType: sale && sale.paymentType,
    payedAmount: sale && sale.payedAmount,
    balance: sale && sale.balance,
    itemSales: sale && sale.itemSales,
  };
}

export function getASaleShape(sale: any) {
  const { saleId, customerId, firstName, lastName, totlaDiscount, paymentType, revdAmount, balance } = sale[0];
  const customerName = firstName + " " + lastName;
  const itemDetails: any | { itemName: string; discount: number; quantity: number; sellingPrice: number; itemId: number; }[] = [];
  if (Array.isArray(sale)) {
    sale.forEach(({ itemName, discount, quantity, sellingPrice, itemId }) => {
      itemDetails.push({ itemName, discount, quantity, sellingPrice, itemId })
    })
  }
  return {
    saleId, customerId, customerName, totlaDiscount, paymentType, revdAmount, balance, itemDetails
  };
}
