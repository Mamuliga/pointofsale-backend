import IReceive from '../interfaces/IReceive';
import Receive from '../db/Receive';
import Supplier from '../db/Supplier';
import ItemReceiving from '../db/ItemReceiving';

const getReceivingOptions = {
  include: [
    {
      model: Supplier,
      as: 'supplier'
    },
    {
      model: ItemReceiving,
      as: 'itemReceivings'
    }
  ]
}

export async function getAllReceiving() {
  return await Receive.findAll();
}

export async function getReceiving(id: number) {
  return await Receive.findByPk(id, getReceivingOptions);
}

export async function createReceiving(receive: IReceive) {
  return await Receive.create(receive);
}
