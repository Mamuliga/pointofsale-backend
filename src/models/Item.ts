import Item from "./../db/Item";
import IItem from "./../interfaces/IItem";

export async function getAllItems() {
  return await Item.findAll();
}

export async function getItem(id: number) {
  return await Item.findByPk(id);
}

export async function createItem(item: IItem) {
  return await Item.create(item);
}

export async function updateItem(id: number, item: any) {
  const oldItem = await Item.findByPk(id);
  if (oldItem) {
    const newItem = await oldItem.update(item);
    return newItem;
  }
}

export async function deleteItem(id: number) {
  const oldItem = await Item.findByPk(id);
  if (oldItem) {
    await oldItem.destroy();
    return oldItem;
  }
}
