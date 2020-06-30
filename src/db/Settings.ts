import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true
  })
class Settings extends Model<Settings>{
    @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: "company's or the shop's logo"
      })
      logo: string | undefined;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notNull: true
        },
        comment: "Name of the company or the shop"
      })
      companyName: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notNull: true
        },
        comment: "Address of the company or the shop"
      })
      address: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        },
        comment: "Email Address of the company or the shop"
      })
      email: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
          len: [2, 10]
        },
        comment: "Phone number of the company or the shop"
      })
      phoneNo: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: "Description about the company or the shop"
      })
      description: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: "Opening time of the company or the shop"
      })
      openingTime: string | undefined;

      @Column({
        type: DataType.STRING,
        allowNull: true,
        comment: "Closing time of the company or the shop"
      })
      closingTime: string | undefined;

}

export default Settings;