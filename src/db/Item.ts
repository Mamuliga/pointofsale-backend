import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ITEM_CATEGORIES } from "../utilities/constant";

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
    comment: "first Name of the employee"
  })
  barcode: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "first Name of the employee"
  })
  itemName: string | undefined;

  @Column({
    type: DataType.STRING,
    validate: {
      isIn: {
        args: [Object.keys(ITEM_CATEGORIES)],
        msg: "Invalid Category"
      }
    },
    comment: "Item Category"
  })
  category: string | undefined;

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
