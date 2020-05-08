import Sequelize from "sequelize";
import ItemSale from "../db/ItemSale";
import Sale from "../db/Sale";

const Op = Sequelize.Op;

export async function getNetProfit(dates: any) {
  const { startDate, endDate } = dates;
  let dateFilters = {};
  if (startDate && endDate) {
    dateFilters = {
      createdAt: {
        [Op.gte]: startDate,
        [Op.lte]: endDate,
      },
    };
  } else {
    return;
  }

  const allItemSales = await ItemSale.findAll({ where: dateFilters });
  const noOfItems = allItemSales.length;
  return [noOfItems, calculateProfit(allItemSales), startDate, endDate];
}

export async function getDailySales(date: any) {
  console.log(date);
  let dateFilters = {};
  let salesDate;
  if ("date" in date) {
    dateFilters = {
      createdAt: {
        [Op.lte]: new Date(new Date(date.date).getTime() + 24 * 60 * 60 * 1000),
        [Op.gte]: new Date(date.date),
      },
    };
    salesDate = `Date is ${date.date}`;
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      },
    };
    salesDate = `Today`;
  }

  const allSales = await Sale.findAll({ where: dateFilters });
  const salesSummary = await Sale.findAll({
    attributes: [
      [Sequelize.fn("COUNT", Sequelize.col("id")), "salesCount"],
      [Sequelize.fn("SUM", Sequelize.col("total")), "totalOfAllSales"],
    ],
    where: dateFilters,
  });

  return [[...salesSummary], salesDate, [...allSales]];
}

function calculateProfit(a: any) {
  let sum = 0;
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    let p = element.quantity;
    let q = element.sellingPrice;
    let r = element.costPrice;
    sum += p * (q - r);
  }
  return sum;
}
