import { Role } from "./Role";

export class User {
    private id?: string | null;
    private name: string;
    private lastname: string;
    private dni: number;
    private username: string;
    private password: string;
    private accountInactive?: Date | null;
    private role: Role;

    constructor(
        name: string,
        lastname: string,
        dni: number,
        username: string,
        password: string,
        role: Role,
        accountInactive?: Date,
        id?: string
    ) {
        this.name = name;
        this.lastname = lastname;
        this.dni = dni;
        this.username = username;
        this.password = password;
        this.role = role;
        this.accountInactive = accountInactive;
        this.id = id;
    }


    hasItems(): boolean {
        return (this.name && this.lastname && this.dni && this.username && this.password && this.role)? true : false;
    }

    getId(): string | undefined | null {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getLastname(): string {
        return this.lastname;
    }

    setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    getDni(): number {
        return this.dni;
    }

    setDni(dni: number): void {
        this.dni = dni;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getAccountInactive(): Date | undefined | null {
        return this.accountInactive;
    }

    setAccountInactive(accountInactive?: Date): void {
        this.accountInactive = accountInactive;
    }

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role): void {
        this.role = role;
    }
}
