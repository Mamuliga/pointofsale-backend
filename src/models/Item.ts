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
  const itemAtt = await Item.findAll({
    attributes: ["id"],
    where: {
      [Op.or]: [
        { id: { [Op.like]: `%${q}%` } },
        { barcode: { [Op.like]: `%${q}%` } },
        { itemName: { [Op.like]: `%${q}%` } },
      ],
    },
  });
  const i_id = itemAtt.map((tag) => tag.id);
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

export async function searchItemsForReceives(q: any) {
  const itemId = await Item.findAll({
    attributes: ["id"],
    where: {
      [Op.or]: [
        { id: { [Op.like]: `%${q}%` } },
        { barcode: { [Op.like]: `%${q}%` } },
        { itemName: { [Op.like]: `%${q}%` } },
      ],
    },
  });
  const i_id = itemId.map((tag) => tag.id);
  const items = await Item.findAll({
    attributes: ["id", "itemName"],
    where: { id: i_id },
    
  });
  return items;
}
