import ISale from '../interfaces/ISale';
import Sale from '../db/Sale';
import Customer from '../db/Customer';
import ItemSale from '../db/ItemSale';
import Sequelize from "sequelize";
import Item from '../db/Item';
import CashBook from '../db/CashBook';
import ItemStats from '../db/ItemStat';

const Op = Sequelize.Op;

const getSaleOptions = {
  include: [
    {
      model: Customer,
      as: 'customer'
    },
    {
      model: ItemSale,
      as: 'itemSales',
      include: [
        {
          model: Item,
          as: 'item'
        }
      ]
    }
  ]
};

export async function getAllSales(dates: any) {
  const { date1, date2 } = dates;
  let date = '';
  let dateFilters = {};
  if (date1 && date2) {
    dateFilters = {
      createdAt: {
        [Op.lt]: date1,
        [Op.gt]: date2,
      }
    }
    date = `Between ${date1} and ${date2}`
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      }
    }
    date = `Today`
  }

  const allSales = await Sale.findAll({ where: dateFilters });
  const salesSummary = await Sale.findAll({
    attributes: [
      [Sequelize.fn('COUNT', Sequelize.col('id')), 'salesCount'],
      [Sequelize.fn('SUM', Sequelize.col('total')), 'totalOfAllSales']]
  },
  );
  return [[...salesSummary], date, [...allSales]]
}

export async function getSale(id: number) {
  return await Sale.findByPk(id, getSaleOptions);
}

export async function createSale(customer: ISale) {
  return await Sale.create(customer);
}

export const handleItemSaleOnSale = async (itemSales: any, sale: any) => {
  itemSales.forEach(async (itemSale: any) => {
    try {
      const { itemId, sellingPrice, discount, quantity, description } = itemSale;
      const itemSaleDetails = {
        saleId: sale.toJSON().id,
        itemId,
        sellingPrice,
        discount,
        quantity,
        description,
      }
      const itemSaleResult = await ItemSale.create(itemSaleDetails);
      if (!itemSaleResult) {
        throw new Error("Unable to create the  item sale");
      }
    } catch (ex) {
      console.log(ex);
    }
  })
}

export const handleCashBookOnSale = async (cashBookDetails: any) => {
  if (cashBookDetails.type === "cash") {
    try {
      const cashBookResult = await CashBook.create(cashBookDetails);
      if (!cashBookResult) {
        throw new Error("Unable to create cashbook entry on sale");
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}

export const handleItemStatOnSale = async (itemSales: any) => {
  try {
    itemSales.forEach(async (itemSale: { quantity: number; itemId: number; }) => {
      await ItemStats.update({
        quantity: Sequelize.literal(`quantity - ${itemSale.quantity}`)
      }, {
        where: {
          itemId: itemSale.itemId,
        }
      });
    })
  } catch (ex) {
    console.log(ex);
  }
}

