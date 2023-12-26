import { Permission } from "./Permission";

export class Role {
    private name: string;
    private permissions: Permission[];

    constructor(name: string, permissions: Permission[]) {
        this.name = name;
        this.permissions = permissions;
    }

    hasItems(): boolean {
        return (this.name && this.permissions.length ) ? true : false;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPermissions(): Permission[] {
        return this.permissions;
    }

    setPermissions(permissions: Permission[]): void {
        this.permissions = permissions;
    }
}
