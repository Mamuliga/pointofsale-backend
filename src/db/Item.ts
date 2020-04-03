import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import ItemStats from "./ItemStat";
@Table({
  timestamps: true
})


class Item extends Model<Item> {
  @HasMany(() => ItemStats)
  itemStats: ItemStats[] | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
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
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Re-order Level"
  })
  reOrderLevel: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Item Description"
  })
  description: string | undefined;
}
export default Item;
