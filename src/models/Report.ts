import Sequelize from "sequelize";
import ItemSale from "../db/ItemSale";

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
