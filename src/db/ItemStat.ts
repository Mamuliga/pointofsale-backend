import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  HasOne,
  ForeignKey
} from "sequelize-typescript";
 import Supplier from "./Supplier";
import Item from "./Item";

@Table({
  timestamps: true
})
class ItemStats extends Model<ItemStats> {
  @ForeignKey(()=>Item)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Item Id"
  })
  itemId: string | undefined;

  @ForeignKey(()=>Supplier)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Supplier"
  })
  supplier: string | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Cost Prices"
  })
  costPrice: number | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Sales price"
  })
  salesPrice: number | undefined;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Manufacture date"
  })
  manuDate: string | undefined;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Exp date"
  })
  expDate: number | undefined;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Qty of the item"
  })
  quantity: number | undefined;

}

export default ItemStats;
