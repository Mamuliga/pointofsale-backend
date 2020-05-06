import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { GENDER } from "../utilities/constant";
import ItemStats from "./ItemStat";
import Receive from "./Receive";

@Table({
  timestamps: true
})
class Supplier extends Model<Supplier> {
  @HasMany(() => ItemStats)
  itemStats: ItemStats[] | undefined;

  @HasMany(() => Receive)
  receivings: Receive[] | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "first name of the supplier"
  })
  firstName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "last name of the supplier."
  })
  lastName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    comment: "Email Address of the supplier"
  })
  email: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Phone number of the supplier"
  })
  phoneNo: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [Object.keys(GENDER)],
        msg: "Gender can be only 'male' or 'female'"
      }
    },
    comment: "Gender of the employee"
  })
  gender: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Address of the supplier"
  })
  address: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Description about the supplier"
  })
  description: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Default Discount for supplier"
  })
  defaultDiscount: string | undefined;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    comment: "Bank Account Details of the supplier"
  })
  bankAccount: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "recruiter to the company."
  })
  recruiter: string | undefined;
}

export default Supplier;
