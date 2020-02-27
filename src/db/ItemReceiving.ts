import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ITEM_CATEGORIES } from "../utilities/constant";

@Table({
  timestamps: false
})
class ItemReceiving extends Model<ItemReceiving> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "quantity of the item"
  })
  quantity: number | undefined;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "cost price of the item"
  })
  costPrice: number | undefined;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "sale price of the item"
  })
  salePrice: number | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "receiving date of the item"
  })
  revDate: Date | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "expiry date of the item"
  })
  expDate: Date | undefined;
}
export default ItemReceiving;
