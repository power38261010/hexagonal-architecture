import { User } from "../entities/User";
import { Role } from "../entities/Role";
import {UserRepository } from "../repositories/UserRepository";

export class CartService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    add(user: User) {
        this.hasItems(user)
        this.userRepository.add(user);
    }

    delete(user: User) {
        this.hasItems(user)
        this.userRepository.delete(user);
    }

    getByName(user: string) {
        this.isEmpty(user)
        this.userRepository.getByName(user);
    }

    getById(user: string) {
        this.isEmpty(user)
        this.userRepository.getById(user);
    }

    getUsersByRole(role: Role) {
        this.hasItems(role)
        this.userRepository.getUsersByRole(role);
    }

    hasItems(model: User | Role) {
        if (!model.hasItems()) {
            throw new Error("El usuario no tiene items");
        }
    }

    isEmpty (name?: string) {
        if ( name ) {
            throw new Error("No se aceptan campos vacios");
        }
    }
}





