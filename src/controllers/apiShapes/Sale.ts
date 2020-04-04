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