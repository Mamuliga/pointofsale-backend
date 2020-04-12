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
