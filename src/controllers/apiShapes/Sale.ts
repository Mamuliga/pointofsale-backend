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
  const { id, customer, total, totlaDiscount, paymentType, balance, itemSales } = sale;
  const itemDetails: any | { itemName: string; discount: number; quantity: number; sellingPrice: number; itemId: number; }[] = [];
  if (sale) {
    if (Array.isArray(itemSales)) {
      itemSales.forEach(({ item: { itemName }, discount, quantity, sellingPrice, itemId }) => {
        itemDetails.push({ itemName, discount, quantity, sellingPrice, itemId })
      })
    }
    return {
      id,
      customerName: customer.firstName + " " + customer.lastName,
      total,
      totlaDiscount,
      paymentType,
      balance,
      itemDetails,
      sale,
    };
  } else {
    return {};
  }
}
