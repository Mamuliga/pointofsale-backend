import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import ItemStats from "./ItemStat";
import ItemSale from "./ItemSale";
import ItemReceiving from "./ItemReceiving";
@Table({
  timestamps: true
})


class Item extends Model<Item> {
  @HasMany(() => ItemStats)
  itemStats: ItemStats[] | undefined;
  
  @HasMany(() => ItemSale)
  itemSales: ItemSale[] | undefined;

  @HasMany(() => ItemReceiving)
  itemReceive: ItemReceiving[] | undefined;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Item barcode"
  })
  barcode: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Item name"
  })
  itemName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull:true,
    comment: "Item Category"
  })
  category: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Re-order Level"
  })
  reOrderLevel: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Item Description"
  })
  description: string | undefined;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    comment: "Is expire date enabled"
  })
  isExpireDateEnabled: boolean | undefined;
}
export default Item;
