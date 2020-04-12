import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';
import Customer from '../db/Customer';
import ItemSale from '../db/ItemSale';
import sequelize from '../db';

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

export async function getAllSales() {
  return await Sale.findAll();
}

export async function getSale(id: number) {
  return await Sale.findByPk(id, getSaleOptions);
}

export async function createSale(sale: ISale) {
  return await Sale.create(sale);
}

export function getSingleSale(id: number) {
  // saleId, customerId, total, firstName as customerFirstName, lastName as customerLastName, totalDiscount, paymentType, revdAmount, balance, itemName
  const getSaleQuery = `SELECT * FROM (((Sales s INNER JOIN ItemSales i ON s.${id} = i.saleId) INNER JOIN Items item ON item.id = i.itemId) INNER JOIN customers cus ON s.customerId = cus.id) WHERE s.id=1`;
  return sequelize.query(getSaleQuery).spread((results: any) => {
      return results;
    }
  )
}
