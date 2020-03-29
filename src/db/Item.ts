import { Model, Table, Column, DataType } from "sequelize-typescript";

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
//TODO Add Relational data Type
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
