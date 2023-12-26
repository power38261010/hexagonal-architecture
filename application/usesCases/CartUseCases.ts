import { Cart } from "../../domain/entities/Cart";
import { User } from "../../domain/entities/User";
import { CartService } from "../../domain/services/CartService";
import { BuyCartDTO } from "../DTOs/BuyCartDTO";
import { ProductsDTO } from "../DTOs/ProductsDTO";

export class CartUseCases {

    private cartService: CartService;

    constructor(cartService: CartService) {
        this.cartService = cartService;
    }

    addItem(itemDTO:ProductsDTO): Cart {
        this.cartService.addProduct(itemDTO);
        throw new Error("Method not implemented.");
    }

    removeItem(itemDTO: ProductsDTO): Cart {
        this.cartService.removeProduct(itemDTO);
        throw new Error("Method not implemented.");
    }

    buy(buycartDTO: BuyCartDTO) {
        const cart: Cart = {
            products: buycartDTO.getProducts(),
            user: buycartDTO.getUser()
        }
        this.cartService.buy(cart);
        return cart;
    }

    cancelPurchase(buycartDTO: BuyCartDTO): void {
        this.cartService.cancelPurchase(buycartDTO);
        throw new Error("Method not implemented.");
    }

    getCartsHistory(user: User) {
        return this.cartService.getPurchaseHistory(user);
    }
}
