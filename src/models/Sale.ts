import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';
import Customer from '../db/Customer';

const getSaleOptions = {
  include: [
    {
      model: Customer,
      as: 'customer'
    }
  ]
};

export async function getAllSales() {
  return await Sale.findAll();
}

export async function getSale(id: number) {
  return await Sale.findByPk(id, getSaleOptions);
}

export async function createSale(customer: ISale) {
  return await Sale.create(customer);
}
