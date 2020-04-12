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
  const itemDetails: any | { itemName: any; discount: any; quantity: any; sellingPrice: any; }[] = [];
  if (Array.isArray(sale)) {
    sale.forEach(({ itemName, discount, quantity, sellingPrice }) => {
      itemDetails.push({ itemName, discount, quantity, sellingPrice })
    })
  }
  return {
    saleId, customerId, customerName, totlaDiscount, paymentType, revdAmount, balance, itemDetails
  };
}
