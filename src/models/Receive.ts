import IReceive from '../interfaces/IReceive';
import Receive from '../db/Receive';
import Supplier from '../db/Supplier';
import ItemReceiving from '../db/ItemReceiving';
import Sequelize from 'sequelize';
import Item from '../db/Item';
import CashBook from '../db/CashBook';
import ItemStats from '../db/ItemStat';

const Op = Sequelize.Op;

const getReceivingOptions = {
  include: [
    {
      model: Supplier,
      as: 'supplier',
      attributes: ['firstName', 'lastName'],
    },
    {
      model: ItemReceiving,
      as: 'itemReceivings',
      attributes: ['discount', 'quantity', 'receivePrice', 'itemId'],
      include: [
        {
          model: Item,
          as: 'item',
          attributes: ['itemName'],
        },
      ],
    },
  ],
  attributes: ['total', 'totalDiscount', 'paymentType'],
};

export async function getAllReceivings(dates: any) {
  const { date1, date2 } = dates;
  let date = '';
  let dateFilters = {};
  if (date1 && date2) {
    dateFilters = {
      createdAt: {
        [Op.lt]: date1,
        [Op.gt]: date2,
      },
    };
    date = `Between ${date1} and ${date2}`;
  } else {
    dateFilters = {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      },
    };
    date = `Today`;
  }
  const allReceives = await Receive.findAll({ where: dateFilters });
  const receiveSummary = await Receive.findAll({
    attributes: [
      [Sequelize.fn('COUNT', Sequelize.col('id')), 'receivesCount'],
      [Sequelize.fn('SUM', Sequelize.col('total')), 'totalOfAllReceives'],
    ],
  });
  return [[...receiveSummary], date, [...allReceives]];
}

export async function getReceiving(id: number) {
  return await Receive.findByPk(id, getReceivingOptions);
}

export async function createReceiving(receive: IReceive) {
  return await Receive.create(receive);
}

export const handleItemReceiveOnReceive = async (
  itemReceives: any,
  receive: any
) => {
  itemReceives.forEach(async (itemReceive: any) => {
    try {
      const {
        itemId,
        receivePrice,
        discount,
        quantity,
        description,
      } = itemReceive;
      const itemReceiveDetails = {
        receiveId: receive.toJSON().id,
        itemId,
        receivePrice,
        discount,
        quantity,
        description,
      };
      const itemReceiveResult = await ItemReceiving.create(itemReceiveDetails);
      if (!itemReceiveResult) {
        throw new Error('Unable to create the  item receive');
      }
    } catch (ex) {
      console.log(ex);
    }
  });
};

export const handleCashBookOnReceive = async (cashBookDetails: any) => {
  if (cashBookDetails.type === 'cash') {
    try {
      const cashBookResult = await CashBook.create(cashBookDetails);
      if (!cashBookResult) {
        throw new Error('Unable to create cashbook entry on receive');
      }
    } catch (ex) {
      console.log(ex);
    }
  }
};

export const handleItemStatOnReceive = async (itemReceives: any) => {
  try {
    itemReceives.forEach(
      async (itemReceive: { quantity: number; itemId: number }) => {
        await ItemStats.update(
          {
            quantity: Sequelize.literal(`quantity + ${itemReceive.quantity}`),
          },
          {
            where: {
              itemId: itemReceive.itemId,
            },
          }
        );
      }
    );
  } catch (ex) {
    console.log(ex);
  }
};
