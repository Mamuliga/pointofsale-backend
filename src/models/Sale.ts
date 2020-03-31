import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';

export async function getAllReceiving() {
  return await Sale.findAll();
}

export async function getReceiving(id: number) {
  return await Sale.findByPk(id);
}

export async function createReceiving(customer: ISale) {
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
