import { Role } from "../../domain/entities/Role";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserRepositorySequelizeAdapter implements UserRepository {
    private db:any;

    constructor(db:any) {
        this.db = db;
    }

    getByName(userName: string) {
        return this.db.findUserByName(userName)
    }

    getById(userId: string) {
        // throw new Error("Method not implemented.");
        return this.db.findUserById(userId)
    }

    getUsersByRole(role: Role) {
        // throw new Error("Method not implemented.");
        return this.db.findUsersByRole(role)
    }

    delete(user: User) {
        // throw new Error("Method not implemented.");
        return this.db.deleteUser(user)
    }

    add(user: User) {
        // throw new Error("Method not implemented.");
        return this.db.addUser(user)
    }
}