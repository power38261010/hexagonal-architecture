import { Product } from "../../domain/entities/Product";
import { User } from "../../domain/entities/User";
import { ProductDTO } from "./ProductCreatedResponse";

export class BuyCartDTO {
    private products: Product[];
    private user: User;

    constructor(products: object[], user: User) {
        this.products = this.sanitizeProducts(products);
        this.user = user;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getUser(): User {
        return this.user;
    }

    sanitizeProducts(products: object[]): Product[] {
        return products.map((product: object) =>  ( new ProductDTO(product).getProduct() ));
    }
}

