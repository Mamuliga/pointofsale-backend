import CashBook from "../db/CashBook";
import ICashBook from "./../interfaces/ICashBook";
import Sequelize from "sequelize";
const Op = Sequelize.Op;

export async function getAllCashBookEntries(dates: any) {
  const { startDate, endDate } = dates;
  let dateFilters = {};
  if (startDate && endDate) {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(endDate).setUTCHours(23, 59, 59, 0),
        [Op.gt]: new Date(startDate).setUTCHours(0, 0, 0, 0),
      },
    };
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(new Date().setDate(31)).setUTCHours(23, 59, 59, 0),
        [Op.gt]: new Date(new Date().setDate(1)).setUTCHours(0, 0, 0, 0),
      },
    };
  }
  return await CashBook.findAll({ where: dateFilters });
}

export async function getCashBookEntry(id: number) {
  return await CashBook.findByPk(id);
}

export async function createCashbookEntry(cashbook: ICashBook) {
  return await CashBook.create(cashbook);
}
