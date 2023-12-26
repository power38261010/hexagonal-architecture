export class Category {
    name: string;
    subCategory?: string;

    constructor(name: string, subCategory?: string) {
        this.name = name;
        this.subCategory = subCategory;
    }

    getName(): string {
        return this.name;
    }

    hasItems(): boolean {
        return (this.name) ? true : false;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSubCategory(): string | undefined {
        return this.subCategory;
    }

    setSubCategory(subCategory: string): void {
        this.subCategory = subCategory;
    }
}
