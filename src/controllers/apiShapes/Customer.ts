export function Customer(customer: any) {
  return {
    id:customer && customer.id,
    firstName: customer && customer.firstName,
    lastName: customer && customer.lastName,
    phoneNo: customer && customer.phoneNo,
    gender: customer && customer.gender,
    bankAccount: customer && customer.bankAccount
  };
}
