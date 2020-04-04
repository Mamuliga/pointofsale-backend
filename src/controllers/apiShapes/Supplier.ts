export function SuppliersShape(supplier: any) {
  return {
    id: supplier && supplier.id,
    firstName: supplier && supplier.firstName,
    lastName: supplier && supplier.lastName,
    phoneNo: supplier && supplier.phoneNo,
    gender: supplier && supplier.gender,
  }
}

export function SupplierShape(supplier: any) {
  return {
    id: supplier && supplier.id,
    firstName: supplier && supplier.firstName,
    lastName: supplier && supplier.lastName,
    phoneNo: supplier && supplier.phoneNo,
    gender: supplier && supplier.gender,
    bankAccount: supplier && supplier.bankAccount,
    email: supplier && supplier.email,
    address: supplier && supplier.address,
    description: supplier && supplier.description,
    defaultDiscount: supplier && supplier.defaultDiscount,
    itemStats: supplier && supplier.itemStats,
    receivings: supplier && supplier.receivings,
  };
}
