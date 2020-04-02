import IReceive from '../interfaces/IReceive';
import Receive from '../db/Receive';
import Item from '../db/Item';
import Supplier from '../db/Supplier';

const getReceivingOptions = {
  include: [
    {
      model: Item,
      as: 'item'
    },
    {
      model: Supplier,
      as: 'supplier'
    }
  ]
}

export async function getAllReceiving() {
  return await Receive.findAll();
}

export async function getReceiving(id: number) {
  return await Receive.findByPk(id, getReceivingOptions);
}

export async function createReceiving(customer: IReceive) {
  return await Receive.create(customer);
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
