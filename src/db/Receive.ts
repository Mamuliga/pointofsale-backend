import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true
})
class Receive extends Model<Receive> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "id of the receiving table"
  })
  id: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "Supplier of the recieving item"
  })
  supplier: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    comment: "Total of the recieving bill"
  })
  total: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "Total Discount of the item"
  })
  totalDiscount: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Payment type of the Receive"
  })
  paymentType: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Payed amount of received amount"
  })
  payedAmount: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Balance of the recieved amount"
  })
  balance: string | undefined;
}

export default Receive;

