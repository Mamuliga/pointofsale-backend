import ItemStats from "../db/ItemStat";
import IItemStats from "../interfaces/IItemStat";
import Supplier from "../db/Supplier";

export async function getAllItemStats() {
  return await ItemStats.findAll(
    {
    include: [{
      model: Supplier,
      as: 'supplier'
   }]

  }
  );
}

export async function getItemStats(id: number) {
  return await ItemStats.findByPk(id);
}

export async function createItemStats(item: IItemStats) {
  return await ItemStats.create(item);
}

export async function updateItemStats(id: number, item: any) {
  const oldItem = await ItemStats.findByPk(id);
  if (oldItem) {
    const newItem = await oldItem.update(item);
    return newItem;
  }
}

export async function deleteItemStats(id: number) {
  const oldItem = await ItemStats.findByPk(id);
  if (oldItem) {
    await oldItem.destroy();
    return oldItem;
  }
}
