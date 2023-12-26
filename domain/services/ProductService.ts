import { ProductRepository } from "../repositories/ProductRepository ";
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { Category } from "../entities/Category";


export class ProductService {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository
    }

    add(product: Product) {
        this.hasItems(product)
        this.productRepository.saveProduct(product);
    }

    delete(product: Product) {
        this.hasItems(product)
        this.productRepository.saveProduct(product);
    }

    getProductsByUser (user: User) {
        this.hasItems(user)
        this.productRepository.getProductsByUser(user);
    }

    getProductsByCategory (categpry: Category) {
        this.hasItems(categpry)
        this.productRepository.getProductsByCategory(categpry);
    }

    hasItems(model: Product | User | Category) {
        if (!model.hasItems()) {
            throw new Error("El objeto esta parcialmente incompleto");
        }
    }
}


