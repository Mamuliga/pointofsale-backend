import {
    Table, 
    Model,
    Column,
    DataType
  } from "sequelize-typescript";
  
  @Table({
    timestamps: true
  })
  class ItemSale extends Model<ItemSale> {
    // TODO @ForeignKey(()=>Item)
    @Column({
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Sale Id"
    })
    saleId: string | undefined;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "item name"
    })
    item: string | undefined;
  
    @Column({
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Selling price of the item"
    })
    selling_price: number | undefined;
  
    @Column({
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Discount of item"
    })
    discount: number | undefined;
  
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        validate: {
          notNull: true
        },
        comment: "Qty of the item"
      })
      quantity: number | undefined;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Description of item sale"
    })
    description: number | undefined;
  }
  
  export default ItemSale;