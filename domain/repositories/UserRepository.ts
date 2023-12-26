import { User } from "../entities/User";
import { Role } from "../entities/Role";

export interface UserRepository {
    getByName(userName: string):User[] | undefined;
    getById(userId: string):User | undefined;
    getUsersByRole(role: Role):User[] | undefined;
    delete(user: User):void;
    add(user: User):void;
}