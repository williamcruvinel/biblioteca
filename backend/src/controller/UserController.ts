import { Handler } from "express";
import { CreateUserShemas, UpdateUserShemas } from "../Schema/UserSchemas";
import { UserService } from "../service/UserService";

export class UserController {
  constructor(private readonly userService: UserService) {}

  index: Handler = async (req, res, next) => {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    }
    catch (error) {
      next(error);
    }
  };

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateUserShemas.parse(req.body);
      const newUser = await this.userService.createUser(body);
      res.json(newUser);
    }
    catch (error) {
      next(error);
    }
  };

  show: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.getUserById(+req.params.id)
      res.json(user)
    }
    catch (error) {
      next(error) 
    }
  };

  update: Handler = async (req, res, next) => {
    try {
      const userId = +req.params.id
      const body = UpdateUserShemas.parse(req.body)
      const updateUser = await this.userService.updateUser(userId, body)
      res.json(updateUser)      
    }
    catch (error) {
      next(error)
    }
  };

  delete: Handler = async (req, res, next) => {
    try {
      const userId = +req.params.id
      const deletedUser = await this.userService.deleteUser(userId)
      res.json({deletedUser})
    } 
    catch (error) {
      next(error)
    }
  };
}
