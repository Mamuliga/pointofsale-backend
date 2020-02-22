import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false
})
class Customer extends Model<Customer> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "first Name of the customer"
  })
  firstName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: "last Name of the customer"
  })
  lastName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Company of the customer"
  })
  companyName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    comment: "Email Address of the customer"
  })
  email: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "Phone number of the person"
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
    comment: "Gender of the person"
  })
  gender: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Address of the person"
  })
  address: string | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    comment: "Date of birth of the person"
  })
  dob: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "Description about the person"
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
    comment: "Default Discount for person"
  })
  defaultDiscount: string | undefined;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    comment: "Bank Account Details of the person"
  })
  bankAccount: string | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    comment: "Joined Date to the company"
  })
  regDate: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: "recruiter to the company"
  })
  recruiter: string | undefined;
}

export default Customer;
