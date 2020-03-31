import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';

export async function getAllSales() {
  return await Sale.findAll();
}

export async function getSale(id: number) {
  return await Sale.findByPk(id);
}

export async function createSale(customer: ISale) {
  return await Sale.create(customer);
}

// export async function updateCustomer(id: number, customer: any) {
//   const oldCustomer = await Customer.findByPk(id);
//   if (oldCustomer) {
//     const newCustomer = await oldCustomer.update(customer);
//     return newCustomer;
//   }
// }

// export async function deleteCustomer(id: number) {
//   const oldCustomer = await Customer.findByPk(id);
//   if (oldCustomer) {
//     await oldCustomer.destroy();
//     return oldCustomer;
//   }
// }
