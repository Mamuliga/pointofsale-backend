import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import Supplier from "./Supplier";
import { string } from "joi";
import { any } from "bluebird";

@Table({
  timestamps: false
})
class Item extends Model<Item> {
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

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Name of the Supplier"
  })
  supplier: string | undefined;

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
