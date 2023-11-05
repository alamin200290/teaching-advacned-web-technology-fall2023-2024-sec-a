import { User } from "src/entities/user.entinty";
import { Product } from "src/entities/product.entinty";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: '123',
    entities: [User, Product],
    synchronize: true
}

export default config;