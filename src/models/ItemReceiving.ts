import ItemReceiving from "./../db/ItemReceiving";
import IItemReceiving from "./../interfaces/IItemReceiving";
import Item from "../db/Item";
import Receive from "../db/Receive";

const getItemRecvOptions = {
  include: [
    {
      model: Item,
      as: 'item'
    },
    {
      model: Receive,
      as: 'receive'
    }
  ]
}

export async function getAllItemReceivings() {
  return await ItemReceiving.findAll();
}

export async function getItemReceiving(id: number) {
  return await ItemReceiving.findByPk(id, getItemRecvOptions);
}

export async function createItemReceiving(item: IItemReceiving) {
  return await ItemReceiving.create(item);
}

export async function updateItemReceiving(id: number, item: any) {
  const oldItemReceiving = await ItemReceiving.findByPk(id);
  if (oldItemReceiving) {
    const newItem = await oldItemReceiving.update(item);
    return newItem;
  }
}

export async function deleteItemReceiving(id: number) {
  const oldItemReceiving = await ItemReceiving.findByPk(id);
  if (oldItemReceiving) {
    await oldItemReceiving.destroy();
    return oldItemReceiving;
  }
}
