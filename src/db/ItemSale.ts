import {
    Table, 
    Model,
    Column,
    DataType,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
import Sale from "./Sale";
import Item from "./Item";
  
  @Table({
    timestamps: true
  })
  class ItemSale extends Model<ItemSale> {
    @ForeignKey(()=>Sale)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Sale Ref"
    })
    saleId: string | undefined;

    @BelongsTo(()=>Sale)
    sale: Sale | undefined;

    @ForeignKey(()=>Item)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "item ref"
    })
    itemId: string | undefined;

    @BelongsTo(()=>Item)
    item: Item | undefined;
  
    @Column({
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notNull: true
      },
      comment: "Selling price of the item"
    })
    sellingPrice: number | undefined;
  
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