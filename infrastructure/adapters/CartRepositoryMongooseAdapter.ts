import { Cart } from "../../domain/entities/Cart";
import { User } from "../../domain/entities/User";
import { Product } from "../../domain/entities/Product";
import { CartRepository } from "../../domain/repositories/CartRepository";

export class CartRepositoryAdapter implements CartRepository {
    private db:any;

    constructor(db:any) {
        this.db = db;
    }

    saveCart(cart: Cart) {
        this.db.saveCart(cart);
    }

    deleteCart(cart: Cart) {
        this.db.deleteCart(cart.getId());
    }

    addProduct(product:Product) {
        this.db.saveProduct(product);
    }

    removeProduct(product:Product) {
        this.db.deleteProduct(product.getId());
    }

    getCartsByUser(user: User):Cart[] | undefined | null {
        return this.db.findCartsByUser({user: user});
    }

}