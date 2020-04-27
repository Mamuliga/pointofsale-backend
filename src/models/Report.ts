import Sequelize from "sequelize";
import ItemSale from "../db/ItemSale";

const Op = Sequelize.Op;

export async function getNetProfit(dates: any) {
  const { date1, date2 } = dates;
  let dateFilters = {};
  if (date1 && date2) {
    dateFilters = {
      createdAt: {
        [Op.gte]: date1,
        [Op.lte]: date2,
      },
    };
  } else {
    return;
  }

  const allItemSales = await ItemSale.findAll({ where: dateFilters });
  console.log(allItemSales);
  return calculateProfit(allItemSales);
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
