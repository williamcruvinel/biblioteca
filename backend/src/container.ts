import { UserController } from "./controller/UserController";
import { UserRepository } from "./repositories/UserRepository";
import { UserService } from "./service/UserService";

// Containers Users
export const userRepository = new UserRepository()
export const userService = new UserService(userRepository)
export const userController = new UserController(userService)