export default interface ISale {
    customerId: number;
    total: number;
    totalDiscount: number;
    paymentType: string;
    payedAmount: number;
    balance: number;
    revdAmount: number;
    itemSales:{itemId:number; sellingPrice:number;discount:number;description:string;quantity:number}[]
    itemDetails: { itemName: string; discount: number; quantity: number; sellingPrice: number; itemId: number; }[];
    cashBookDetails:{refNo:25,description:string,type:string,amount:number};
	}

