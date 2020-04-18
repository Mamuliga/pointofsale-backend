import Item from "./../db/Item";
import IItem from "./../interfaces/IItem";
import ItemStats from "../db/ItemStat";
import { Op } from "sequelize";
import Supplier from "../db/Supplier";
const getItemOptions = {
  include: [
    {
      model: ItemStats,
      as: "itemStats",
    },
  ],
};
const getItemStatsOptions = {
  include: [
    {
      model: Supplier,
      as: "supplier",
    },
    {
      model: Item,
      as: "item",
    },
  ],
};

export async function getAllItems() {
  return await Item.findAll();
}

export async function getItem(id: number) {
  return await Item.findByPk(id, getItemOptions);
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

export async function searchItem(q: any) {
  const itemAtt = await Item.findOne({
    attributes: ["id", "barcode", "itemName"],
    where: {
      [Op.or]: [{ id: q }, { barcode: q }, { itemName: q }],
    },
  });
  const i_id = itemAtt?.id;
  const ItemStatsAtt = await ItemStats.findAll({
    attributes: { exclude: ["costPrice"] },
    where: { itemId: i_id },
    include: [
      {
        model: Supplier,
        as: "supplier",
      },
      {
        model: Item,
        as: "item",
      },
    ],
  });
  return ItemStatsAtt;
}
