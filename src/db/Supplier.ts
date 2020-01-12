import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false
})
class Supplier extends Model<Supplier> {
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
    allowNull: true,
    comment: "Company of the supplier"
  })
  companyName: string | undefined;

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
    allowNull: false,
    comment: "Phone number of the supplier"
  })
  phoneNo: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [["male", "female"]],
        msg: "Gender can be only 'male' or 'female'"
      }
    },
    comment: "Gender of the supplier"
  })
  gender: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Address of the supplier"
  })
  address: string | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    comment: "Date of birth of the supplier"
  })
  dob: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Description about the supplier"
  })
  description: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "image name of profile picture"
  })
  profilePicture: string | undefined;

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
    type: DataType.DATEONLY,
    allowNull: true,
    comment: "Joined Date to the company."
  })
  regDate: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "recruiter to the company."
  })
  recruiter: string | undefined;
}

export default Supplier;
