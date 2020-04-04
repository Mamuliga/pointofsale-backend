import ICustomer from '../interfaces/ICustomer';
import Customer from '../db/Customer';
import Sale from '../db/Sale';

const getSaleOptions = {
  include: [
    {
      model: Sale,
      as: 'sales'
    },
    // {
    //   model: Item,
    //   as: 'item'
    // }
  ]
};

export async function getAllCustomers() {
  return await Customer.findAll();
}

export async function getCustomer(id: number) {
  return await Customer.findByPk(id, getSaleOptions);
}

export async function createCustomer(customer: ICustomer) {
  return await Customer.create(customer);
}

export async function updateCustomer(id: number, customer: any) {
  const oldCustomer = await Customer.findByPk(id);
  if (oldCustomer) {
    const newCustomer = await oldCustomer.update(customer);
    return newCustomer;
  }
}

export async function deleteCustomer(id: number) {
  const oldCustomer = await Customer.findByPk(id);
  if (oldCustomer) {
    await oldCustomer.destroy();
    return oldCustomer;
  }
}
