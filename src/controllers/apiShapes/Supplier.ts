export function Supplier(supplier: any) {
  return {
    firstName: supplier && supplier.firstName,
    lastName: supplier && supplier.lastName,
    phoneNo: supplier && supplier.phoneNo,
    gender: supplier && supplier.gender,
    bankAccount: supplier && supplier.bankAccount
  };
}
