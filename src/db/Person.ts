import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ timestamps: false })
class Person extends Model<Person> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "first Name of the person"
  })
  firstName: string = "";
}

export default Person;
