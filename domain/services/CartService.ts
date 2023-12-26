import { Cart } from "../entities/Cart";
import { User } from "../entities/User";
import { Product } from "../entities/Product";
import { CartRepository } from "../repositories/CartRepository";

export class CartService {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository
    }

    addProduct(product: Product) {
        this.hasItems (product)
        this.cartRepository.addProduct(product);
    }

    removeProduct(product: Product) {
        this.hasItems (product)
        this.cartRepository.removeProduct(product);
    }

    buy(cart: Cart) {
        this.hasItems (cart)
        this.cartRepository.saveCart(cart);
    }

    cancelPurchase(cart: Cart) {
        this.hasItems (cart)
        this.cartRepository.deleteCart(cart);
    }

    getPurchaseHistory(user: User) {
        this.hasItems(user)
        this.cartRepository.getCartsByUser(user);
    }

    hasItems (model: Cart | User | Product) {
        if ( !model.hasItems() ) {
            throw new Error("El objeto esta parcialmente incompleto");
        }
    }
}
