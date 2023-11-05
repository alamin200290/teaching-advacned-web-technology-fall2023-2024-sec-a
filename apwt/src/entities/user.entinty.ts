import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Product } from "./product.entinty";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    name: string;

    @Column({unique: true, nullable:false})
    email: string;

    @Column({nullable:false})
    password: string;

    // @OneToMany(type=>Product, product=>product.user)
    // product: Product[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}