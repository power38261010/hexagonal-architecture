import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository
    }

    add(category: Category) {
        this.hasItems(category)
        this.categoryRepository.saveCategory(category);
    }

    delete(category: Category) {
        this.hasItems(category)
        this.categoryRepository.deleteCategory(category);
    }

    getProductsByCategory(category: Category) {
        this.hasItems(category)
        this.categoryRepository.getProductsByCategory(category);
    }

    hasItems(category: Category) {
        if (!category.hasItems()) {
            throw new Error("El objeto categoria esta parcialmente incompleto");
        }
    }
}

