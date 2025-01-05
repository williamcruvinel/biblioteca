import { httpError } from "../errors/HttpError";
import { ICreateAuthor, IUpdateAuthor } from "../interfaces/IAuthor";
import { AuthorRepository } from "../repositories/AuthorRepository";

export class AuthorService{
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAuthor(){
    const authors = await this.authorRepository.find()
    return authors
  }

  async getAuthorById(authorId: number){
    const author = await this.authorRepository.findById(authorId)
    return author
  }

  async createAuthor(params: ICreateAuthor){
    const authorExists = await this.authorRepository.findByName(params.name)
    if(!authorExists?.name){
      const newAuthor = await this.authorRepository.create(params)
      return newAuthor
    }
    throw new httpError(404, "Autor já cadastrado")
  }
  
  async updateAuthor(authorId: number, params: Partial<IUpdateAuthor>){
    const authorExists = await this.authorRepository.findById(authorId)
    if(!authorExists) throw new httpError(404, "Falha ao atualizar, author não encontrado")
    const updateAuthor = await this.authorRepository.updateById(authorId, params)
    return updateAuthor
  }

  async deleteAuthor(authorId: number){
    const authorExists = await this.authorRepository.findById(authorId)
    if(!authorExists) throw new httpError(404, "Falha ao deletar, author não encontrado")
    const deleteAuthor = await this.authorRepository.deleteById(authorId)
    return deleteAuthor
  }

}