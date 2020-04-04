export function ReceiveShape(receiving: any) {
    return {
      id: receiving && receiving.id,
      item:receiving && receiving.item,
      supplier: receiving && receiving.supplier,
      total: receiving && receiving.total,
      totlaDiscount: receiving && receiving.totlaDiscount,
      paymentType: receiving && receiving.paymentType,
      payedAmount: receiving && receiving.payedAmount,
      balance: receiving && receiving.balance,
      itemReceivings: receiving && receiving.itemReceivings
    };
  }