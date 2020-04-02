import ItemStats from "../db/ItemStat";
import IItemStats from "../interfaces/IItemStat";
import Supplier from "../db/Supplier";
import Item from "../db/Item";

const getItemStatsOptions = {
  include: [
    {
      model: Supplier,
      as: 'supplier'
    },
    {
      model: Item,
      as: 'item'
    }
  ]
};

export async function getAllItemStats() {
  return await ItemStats.findAll();
}

export async function getItemStats(id: number, ) {
  return await ItemStats.findByPk(id, getItemStatsOptions);
}

export async function createItemStats(iemStat: IItemStats) {
  return await ItemStats.create(iemStat);
}

