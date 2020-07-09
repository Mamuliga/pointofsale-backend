import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Supplier from "./Supplier";
import Item from "./Item";
@Table({
  timestamps: true
})
class ItemStats extends Model<ItemStats> {
  @ForeignKey(()=>Item)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Item Id"
  })
  itemId: number | undefined;

  @BelongsTo(() => Item)
  item: Item | undefined;

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.INTEGER,
    comment: "Supplier Id"
  })
  supplierId:number | undefined;

  @BelongsTo(() => Supplier)
  supplier: Supplier | undefined;

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
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Sales price"
  })
  salesPrice: number | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    validate: {
      notNull: false
    },
    comment: "Manufacture date"
  })
  manuDate: Date | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    validate: {
      notNull: false
    },
    comment: "Exp date"
  })
  expDate: Date | undefined;

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
