import ICustomer from "../interfaces/ICustomer";
import Customer from "../db/Customer";

export async function getAllCustomers() {
  return await Customer.findAll();
}

export async function getCustomer(id: number) {
  return await Customer.findByPk(id);
}

export async function createCustomer(customer: ICustomer) {
  return await Customer.create(customer);
}

export async function findByIdAndUpdate(id: number,customer:any) {
  const oldcustomer = await Customer.findByPk(id);
  if(oldcustomer) {
   const newcustomer = await oldcustomer.update({customer});
   return newcustomer;
  }
}

export async function deleteCustomer(id: number) {
  const oldcustomer = await Customer.findByPk(id);
  if(oldcustomer) {
   await oldcustomer.destroy();
   return oldcustomer;
  }
}
