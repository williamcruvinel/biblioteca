import { httpError } from "../errors/HttpError";
import { IBookRepository, ICreateBook } from "../interfaces/IBooks";

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

}