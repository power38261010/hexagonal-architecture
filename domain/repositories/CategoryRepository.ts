import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export interface CategoryRepository {
    saveCategory(category:Category):void;
    deleteCategory(category:Category):void;
    getProductsByCategory (category:Category):Product[] | undefined;
}