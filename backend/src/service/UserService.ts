import { httpError } from "../errors/HttpError";
import { ICreateUser, IUpdateUser, IUserRepository } from "../interfaces/IUser";

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

  async updateUser(userId: number, params: Partial<IUpdateUser> ){
    const userExists = await this.userRepository.findById(userId)
    if (!userExists) throw new httpError(404, "Falha ao atualizar, usuário não encontrado");
    const updateUser = await this.userRepository.updateById(userId, params)
    return updateUser
  }

  async deleteUser(userId: number) {
    const userExists = await this.userRepository.findById(userId)
    if (!userExists) throw new httpError(404, "Falha ao deletar, usuário não encontrado");
    const deletedUser = await this.userRepository.deleteById(userId)
    return deletedUser
  }
}
