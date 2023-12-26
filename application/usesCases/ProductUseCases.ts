import { Category } from "../../domain/entities/Category";
import { User } from "../../domain/entities/User";
import { ProductService } from "../../domain/services/ProductService";
import { ProductsDTO } from "../DTOs/ProductsDTO";

export class CartUseCases {

    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    addItem(productsDTO: ProductsDTO): void {
        this.productService.add(productsDTO);
        throw new Error("Method not implemented.");
    }

    removeItem(productsDTO: ProductsDTO): void {
        this.productService.delete(productsDTO);
        throw new Error("Method not implemented.");
    }

    findProduct(productsDTO: ProductsDTO , findType: string , findKey: Category | User) {

        if ( findType === 'category') return this.productService.getProductsByCategory(findKey);

        else this.productService.getProductsByUser(findKey);
    }
}




