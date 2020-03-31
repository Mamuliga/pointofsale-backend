
import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({ 
  timestamps: false
})
class Sale extends Model<Sale> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Cutomer name"
  })
  customer: string | undefined;

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
  revd_Amount: number | undefined;

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
