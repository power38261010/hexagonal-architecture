import { CartRepositorySequelizeAdapter } from "./infrastructure/adapters/CartRepositorySequelizeAdapter";
import { UserRepositorySequelizeAdapter } from "./infrastructure/adapters/UserRepositorySequelizeAdapter";
import { CartController } from "./infrastructure/rest/CartController";

const db = Sequelize();
const cartRepository = new CartRepositorySequelizeAdapter(db)
const userRepository = new UserRepositorySequelizeAdapter(db)
const controller = new CartController(userRepository, cartRepository);