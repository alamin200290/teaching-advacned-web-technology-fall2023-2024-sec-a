import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entinty";

@Entity("products")
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;

    @Column({unique: true, nullable:false})
    catagory: string;

    // @ManyToOne(type=>User, user=>user.product)
    // user: User;
}