import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Supplier from "./Supplier";
import Item from "./Item";

@Table({
  timestamps: true
})
class Receive extends Model<Receive> {
  @ForeignKey(()=>Item)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Supplier of the recieving item"
  })
  itemId: string | undefined;

  @BelongsTo(()=>Item)
  item: Item | undefined;
  
  @ForeignKey(()=>Supplier)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Supplier of the recieving item"
  })
  supplierId: string | undefined;
  @BelongsTo(()=>Supplier)
  supplier: Supplier | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Total of the recieving bill"
  })
  total: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: "Total Discount of the item"
  })
  totalDiscount: number | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Payment type of the Receive"
  })
  paymentType: string | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    comment: "Payed amount of received amount"
  })
  payedAmount: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    comment: "Balance of the recieved amount"
  })
  balance: number | undefined;
}

export default Receive;

