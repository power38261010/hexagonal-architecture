import { Product } from "./Product";
import { User } from "./User";

export class Cart {
    private id?: string;
    private products: Product[];
    private user: User;

    constructor ( id:string , products: Product[] ,user: User) {
    this.id = id;
    this.products = products;
    this.user = user;
    }

    getId(): string | undefined {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getProducts(): Product[] {
        return this.products;
    }

    setProducts(products: Product[]): void {
        this.products = products;
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User): void {
        this.user = user;
    }

    hasItems(): boolean {
        return (this.products && this.user.hasItems() )? true : false;
    }
}