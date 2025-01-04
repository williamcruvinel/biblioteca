import { httpError } from "../errors/HttpError";
import { ICreateUser, IUserRepository } from "../interfaces/IUser";

export class UserService{
  constructor(private readonly userRepository: IUserRepository) {}

  async getUsers(){
    const users = await this.userRepository.find();
    return users
  }

  async getUserById(userId: number){
    const user = await this.userRepository.findById(userId);
    if (!user) throw new httpError(404, "Usuário não foi encontrado");
    return user
  }

  async createUser(params: ICreateUser){
    const newUser = await this.userRepository.create(params)
    return newUser
  }

  async updateUser(userId: number, params: Partial<ICreateUser> ){
    const updateUser = await this.userRepository.updateById(userId, params)
    if (!updateUser) throw new httpError(404, "Usuário não foi encontrado");
    return updateUser
  }

  async deleteUser(id: number) {
    const userExists = await this.userRepository.findById(id)
    if (!userExists) throw new httpError(404, "Usuário não foi encontrado");
    const deletedUser = await this.userRepository.deleteById(id)
    return deletedUser
  }
}
