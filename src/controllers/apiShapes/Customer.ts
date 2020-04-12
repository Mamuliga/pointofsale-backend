export function CustomerShape(customer: any) {
  return {
    id:customer && customer.id,
    firstName: customer && customer.firstName,
    lastName: customer && customer.lastName,
    phoneNo: customer && customer.phoneNo,
    gender: customer && customer.gender,
    bankAccount: customer && customer.bankAccount,
    sales: customer && customer.sales,
  };
}

export function CustomersShape(customer: any) {
  return {
    id:customer && customer.id,
    firstName: customer && customer.firstName,
    lastName: customer && customer.lastName,
    phoneNo: customer && customer.phoneNo,
    gender: customer && customer.gender,
    bankAccount: customer && customer.bankAccount,
  };
}
