import ISupplier from '../interfaces/ISupplier';
import Supplier from '../db/Supplier';
import ItemStats from '../db/ItemStat';

const getSupplierOptions = {
  include: [
    {
      model: ItemStats,
      as: 'itemStats'
    }
  ]
};

export async function getAllSuppliers() {
  return await Supplier.findAll();
}

export async function getSupplier(id: number) {
  return await Supplier.findByPk(id, getSupplierOptions);
}

export async function createSupplier(supplier: ISupplier) {
  return await Supplier.create(supplier);
}

export async function updateSupplier(id: number, supplier: any) {
  const oldSupplier = await Supplier.findByPk(id);
  if (oldSupplier) {
    const newSupplier = await oldSupplier.update(supplier);
    return newSupplier;
  }
}

export async function deleteSupplier(id: number) {
  const oldSupplier = await Supplier.findByPk(id);
  if (oldSupplier) {
    await oldSupplier.destroy();
    return oldSupplier;
  }
}
