import { BuyCartDTO } from "../../application/DTOs/BuyCartDTO";
import { CartUseCases } from "../../application/usesCases/CartUseCases";
import { CartRepository } from "../../domain/repositories/CartRepository";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { CartService } from "../../domain/services/CartService";

export class CartController {
    private userRepository: UserRepository;
    private cartRepository: CartRepository
    constructor(userRepository: UserRepository, cartRepository: CartRepository) {
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
    }

    buy(req, res) {
        const {products, userId} = req.body;
        const user = this.userRepository.getById(userId);
        const cartDTO = new BuyCartDTO(products, user);

        const service = new CartService(this.cartRepository);
        const cartUseCase = new CartUseCases(service);
        const cart = cartUseCase.buy(cartDTO);

        res.send(new CartCreatedResponse(cart));
    }
}

//desde aca

//service todos las uses cases