export class Permission {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    hasItems(): boolean {
        return (this.name ) ? true : false;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
