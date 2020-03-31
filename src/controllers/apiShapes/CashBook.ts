export function CashbookShape(cashBook: any) {
    return {
      id:cashBook && cashBook.id,
      date: cashBook && cashBook.date,
      refNo: cashBook && cashBook.refNo,
      description: cashBook && cashBook.description,
      type: cashBook && cashBook.type,
      amount: cashBook && cashBook.amount
    };
  }