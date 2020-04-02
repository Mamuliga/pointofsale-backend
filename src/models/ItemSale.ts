import ItemSale from "./../db/ItemSale";
import IItemSale from "./../interfaces/IItemSale";
import Item from "../db/Item";
import Sale from "../db/Sale";

const getItemSalesOptions = {
  include: [
    {
      model: Item,
      as: 'item'
    },
    {
      model: Sale,
      as: 'sale'
    }
  ]
}

export async function getAllItemSales() {
  return await ItemSale.findAll();
}

export async function getItemSales(id: number) {
  return await ItemSale.findByPk(id, getItemSalesOptions);
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
