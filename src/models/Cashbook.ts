import CashBook from "../db/CashBook";
import ICashBook from "./../interfaces/ICashBook";

export async function getAllCashBookEntries() {
  return await CashBook.findAll();
}

export async function getCashBookEntry(id: number) {
  return await CashBook.findByPk(id);
}

export async function createCashbookEntry(cashbook: ICashBook) {
  return await CashBook.create(cashbook);
}

// export async function updateItemStats(id: number, item: any) {
//   const oldItem = await CashBook.findByPk(id);
//   if (oldItem) {
//     const newItem = await oldItem.update(item);
//     return newItem;
//   }
// }

// export async function deleteItemStats(id: number) {
//   const oldItem = await CashBook.findByPk(id);
//   if (oldItem) {
//     await oldItem.destroy();
//     return oldItem;
//   }
// }
