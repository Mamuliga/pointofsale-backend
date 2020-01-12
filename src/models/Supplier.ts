import ISupplier from "../interfaces/ISupplier";
import Supplier from "../db/Supplier";

export async function getAllSuppliers() {
  return await Supplier.findAll();
}

export async function getSupplier(id: number) {
  return await Supplier.findByPk(id);
}

export async function createSupplier(supplier: ISupplier) {
  return await Supplier.create(supplier);
}

export async function findByIdAndUpdate(id: number, supplier: any) {
  const oldsupplier = await Supplier.findByPk(id);
  if (oldsupplier) {
    const newsupplier = await oldsupplier.update({ supplier });
    return newsupplier;
  }
}

export async function deleteSupplier(id: number) {
  const oldsupplier = await Supplier.findByPk(id);
  if (oldsupplier) {
    await oldsupplier.destroy();
    return oldsupplier;
  }
}
