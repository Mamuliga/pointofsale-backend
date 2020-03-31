import ItemSale from "./../db/ItemSale";
import IItemSale from "./../interfaces/IItemSale";

export async function getAllItemSales() {
  return await ItemSale.findAll();
}

export async function getItemSales(id: number) {
  return await ItemSale.findByPk(id);
}

export async function createItemSale(item: IItemSale) {
  return await ItemSale.create(item);
}

export async function updateItemSale(id: number, item: any) {
  const oldItemSale = await ItemSale.findByPk(id);
  if (oldItemSale) {
    const newItemSale = await oldItemSale.update(item);
    return newItemSale;
  }
}

export async function deleteItemSale(id: number) {
  const oldItemSale = await ItemSale.findByPk(id);
  if (oldItemSale) {
    await oldItemSale.destroy();
    return oldItemSale;
  }
}
