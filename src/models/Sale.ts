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
      include:[
        {
          model:Item,
          as:'item'
        }
      ]
    }
  ]
};

export async function getAllSales(dates: any) {
  const {date1, date2} = dates;
  let dateFilters = {};
  if(date1 && date2){
    dateFilters = {
      createdAt: {
        [Op.lt]: date1,
        [Op.gt]: date2,
      }
    }
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      }
    }
  }
  return await Sale.findAll({
    where: dateFilters
  });
}

export async function getSale(id: number) {
  return await Sale.findByPk(id, getSaleOptions);
}

export async function createSale(customer: ISale) {
  return await Sale.create(customer);
}

export const handleItemSaleOnSale = (itemSales: any, sale: any) => {
  itemSales.forEach((itemSale: any) => {
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
      const itemSaleResult = ItemSale.create(itemSaleDetails);
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
      const cashBookResult = CashBook.create(cashBookDetails);
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
    itemSales.forEach((itemSale: { quantity: number; itemId: number; }) => {
      ItemStats.update({
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

