import { Category } from "./Category";

export class Product {
    id?: string;
    branch: string;
    model: string;
    price: number;
    category: Category;
    details?: string;

    constructor(branch: string, model: string, price: number, category: Category, details?: string) {
        this.branch = branch;
        this.model = model;
        this.price = price;
        this.category = category;
        this.details = details;
    }

    hasItems(): boolean {
        return (this.branch && this.model && this.price && this.category.hasItems() ) ? true : false;
    }

    getId(): string | null | undefined {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getBranch(): string {
        return this.branch;
    }

    setBranch(branch: string): void {
        this.branch = branch;
    }

    getModel(): string {
        return this.model;
    }

    setModel(model: string): void {
        this.model = model;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getCategory(): Category {
        return this.category;
    }

    setCategory(category: Category): void {
        this.category = category;
    }

    getDetails(): string | undefined {
        return this.details;
    }

    setDetails(details: string): void {
        this.details = details;
    }
}

// let categoria = new Category ("Auto")
// let producto = new Product ("VW", "Gol", 5000, categoria)
// let resultado = producto.getBranch()
// console.log("Branch ",resultado)
