import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';
import Customer from '../db/Customer';
import ItemSale from '../db/ItemSale';
import sequelize from '../db';
import Sequelize from "sequelize";

const Op = Sequelize.Op;

const getSaleOptions = {
  include: [
    {
      model: Customer,
      as: 'customer'
    },
    {
      model: ItemSale,
      as: 'itemSales'
    },
  ]
};

export async function getAllSales(dates: any) {
  const {date1, date2} = dates;
  let dateFilters = {};
  if(date1 && date2){
    dateFilters = {
      createdAt: {
        [Op.lt]: date1,
        [Op.gt]: date2,
      }
    }
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      }
    }
  }
  return await Sale.findAll({
    where: dateFilters
  });
}

export async function getSale(id: number) {
  return await Sale.findByPk(id, getSaleOptions);
}

export async function createSale(customer: ISale) {
  return await Sale.create(customer);
}

export function getSingleSale(id: number) {
  // saleId, customerId, total, firstName as customerFirstName, lastName as customerLastName, totalDiscount, paymentType, revdAmount, balance, itemName
  const getSaleQuery = `SELECT * FROM (((Sales s INNER JOIN ItemSales i ON s.id = i.saleId) INNER JOIN Items item ON item.id = i.itemId) INNER JOIN customers cus ON s.customerId = cus.id) WHERE s.id=${id}`;
  return sequelize.query(getSaleQuery).spread((results: any) => {
      return results;
    }
  )
}

