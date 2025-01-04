import { Handler } from "express";
import { BookService } from "../service/BookService";
import { CreateBooksSchemas, UpdateBookSchemas } from "../Schema/BookSchemas";

export class BookControler{
  constructor(private readonly bookService: BookService) {}

  index: Handler = async (req, res, next) => {
    try {
      const books = await this.bookService.getBooks()
      res.status(201).json(books)
    }
    catch (error) {
      next(error)
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateBooksSchemas.parse(req.body)
      const newBook = await this.bookService.createBook(body)
      res.status(201).json(newBook)
    }
    catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
      try {
        const book = await this.bookService.getBooksById(+req.params.id)
        res.status(201).json(book)
      } 
      catch (error) {
        next(error)
      }
  }

  update: Handler = async (req, res, next) => {
    try {
      const bookId =  +req.params.id 
      const body = UpdateBookSchemas.parse(req.body)
      const updateBook = await this.bookService.updateBook(bookId, body)
      res.status(201).json(updateBook)
    } 
    catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const bookId = +req.params.id
      const deleteBook = await this.bookService.deleteBook(bookId)
      res.json({deleteBook})
    } 
    catch (error) {
      next(error)  
    }
  }
}