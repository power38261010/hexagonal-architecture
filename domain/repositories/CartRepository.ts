import { Cart } from "../entities/Cart";
import { Product } from "../entities/Product";
import { User } from "../entities/User";

export interface CartRepository {
    addProduct(product:Product):void;
    removeProduct(product:Product):void;
    saveCart(cart:Cart):void;
    deleteCart(cart:Cart):void;
    getCartsByUser(user:User):Cart[] | undefined | null;
}