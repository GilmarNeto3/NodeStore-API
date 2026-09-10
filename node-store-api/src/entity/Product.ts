import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ProductCategory } from "./ProductCategory";
import { ProductSituation } from "./ProductSituation";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @ManyToOne(() => ProductCategory, (category) => category.products)
  @JoinColumn({ name: "productCategoryId" })
  category: ProductCategory;

  @Column()
  productCategoryId: number;

  @ManyToOne(() => ProductSituation, (situation) => situation.products)
  @JoinColumn({ name: "productSituationId" })
  situation: ProductSituation;

  @Column()
  productSituationId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}