import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { EMPLOYEE_ROLES, GENDER } from '../utilities/constant';
import bcrypt from 'bcrypt';
import config from '../config';

@Table({
  timestamps: false
})
class Employee extends Model<Employee> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: 'first Name of the employee'
  })
  firstName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true
    },
    comment: 'last Name of the employee'
  })
  lastName: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    },
    comment: 'Email Address of the employee'
  })
  email: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Phone number of the employee'
  })
  phoneNo: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      isIn: {
        args: [Object.keys(GENDER)],
        msg: "Gender can be only 'male' or 'female'"
      }
    },
    comment: 'Gender of the employee'
  })
  gender: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Address of the employee'
  })
  address: string | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    comment: 'Date of birth of the employee'
  })
  dob: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Description about the employee'
  })
  description: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'image name of profile picture'
  })
  profilePicture: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Default Discount for employee'
  })
  defaultDiscount: string | undefined;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    comment: 'Bank Account Details of the employee'
  })
  bankAccount: string | undefined;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    comment: 'Joined Date to the company'
  })
  regDate: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'recruiter to the company.'
  })
  recruiter: string | undefined;

  @Column({
    type: DataType.STRING,
    defaultValue: EMPLOYEE_ROLES.none,
    validate: {
      isIn: {
        args: [Object.keys(EMPLOYEE_ROLES)],
        msg: 'Invalid Employee Role'
      }
    },
    comment: 'Role in POS.'
  })
  roleInPOS: string | undefined;

  @Column({
    type: DataType.STRING
  })
  private password: string | undefined;

  hashingPassword(password: string) {
    this.password = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(config.BCRYPT_SALT)
    );
  }

  isValidPassword(password: string) {
    return bcrypt.compareSync(password, this.password || '');
  }
}

export default Employee;
