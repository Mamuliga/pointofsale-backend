
import { Model, Table, Column, DataType, HasOne, ForeignKey, BelongsTo } from "sequelize-typescript";
import Customer from "./Customer";
@Table({ 
  timestamps: false
})
class Sale extends Model<Sale> {
  // @HasOne(()=>Customer)
  @ForeignKey(() => Customer)
  @Column({
    type:DataType.INTEGER ,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Cutomer id"
  })
  customerId: string | undefined;
  @BelongsTo(() => Customer)
  customer: Customer | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Sales total"
  })
  total: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull:true,
    comment: "Total Discount of the sale"
  })
  totalDiscount: string | undefined;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Re-order Level"
  })
  paymentType: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Recieved amount"
  })
  revdAmount: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Balance amount of the sale"
  })
  balance: string | undefined;
}
export default Sale;
