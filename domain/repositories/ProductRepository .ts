import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { User } from "../entities/User";

export interface ProductRepository {
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;
    getProductsByUser(user:User): Product[] | undefined;
    getProductsByCategory(category:Category): Product[] | undefined;
}