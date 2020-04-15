export default interface IReceive {
  supplierId: number;
  total: number;
  totalDiscount: number;
  paymentType: string;
  payedAmount: number;
  balance: number;
  revdAmount: number;
  itemReceives: {
    itemId: number;
    receivingPrice: number;
    discount: number;
    description: string;
    quantity: number;
  }[];
  itemDetails: {
    itemName: string;
    discount: number;
    quantity: number;
    receivingPrice: number;
    itemId: number;
  }[];
  cashBookDetails: {
    refNo: 25;
    description: string;
    type: string;
    amount: number;
  };
}
