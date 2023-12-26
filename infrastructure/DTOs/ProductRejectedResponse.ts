import { Product } from "../../domain/entities/Product";
import { User } from "../../domain/entities/User";
import { ProductsDTO } from "./ProductsDTO";

export class ProductDTO {
    private product: Product;

    constructor(product: object) {
        this.product = this.sanitizeProduct (product);
    }

    getProduct(): Product {
        return this.product;
    }


    sanitizeProduct(product: object): Product {
        let newProduct = new Product (product['branch'] , product['model'], product['price'],product['category'],product['details'] );
        return newProduct;
    }
}

