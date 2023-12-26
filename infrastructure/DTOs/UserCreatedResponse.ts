import { User } from "../../domain/entities/User";
import { Role } from "../../domain/entities/Role";

export class UserDTO {
    private user: User;

    constructor(user: object) {
        this.user = this.sanitizeUser (user);
    }

    getUser(): User {
        return this.user;
    }

    // getObjectRole(roleName: string, permissions: Permission): Role {
    //     return new Role(roleName);
    // }


    sanitizeUser(user: object): User {
        let newUser = new User (user['name'] , user['lastname'], user['dni'],user['username'],user['password'], user['role']  );
        return newUser;
    }
}

