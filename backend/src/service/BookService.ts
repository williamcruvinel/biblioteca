import { httpError } from "../errors/HttpError";
import { IBookRepository, ICreateBook, IUpadateBook } from "../interfaces/IBooks";

export class BookService{
  constructor(private readonly bookReposittory: IBookRepository) {}

  async getBooks(){
    const books = await this.bookReposittory.find()
    return books
  }

  async getBooksById(bookId: number){
    const book = await this.bookReposittory.findById(bookId)
    if(!book) throw new httpError(404, "Livro não encontrado")
    return book
  }

  async createBook(params: ICreateBook){
    const newBook = await this.bookReposittory.create(params)
    return newBook
  }

  async updateBook(bookId: number, params: Partial<IUpadateBook>){
    const bookExists = await this.bookReposittory.findById(bookId)
    if(!bookExists) throw new httpError(404, "Falha ao atualizar, livro não encontrado")
    const updateBook = await this.bookReposittory.updateById(bookId, params)
    return updateBook
  }

  async deleteBook(bookId: number){
    const bookExists = await this.bookReposittory.findById(bookId)
    if (!bookExists) throw new httpError(404, "Falha ao deletar, livro não encontrado");
    const deletedUser = await this.bookReposittory.deleteById(bookId)
    return deletedUser 
  }
}
