import { AuthorController } from "./controller/AuthorController";
import { BookControler } from "./controller/BookController";
import { UserController } from "./controller/UserController";
import { AuthorRepository } from "./repositories/AuthorRepository";
import { BookRepository } from "./repositories/BookRepository";
import { UserRepository } from "./repositories/UserRepository";
import { AuthorService } from "./service/AuthorService";
import { BookService } from "./service/BookService";
import { UserService } from "./service/UserService";

// Containers Users
export const userRepository = new UserRepository()
export const userService = new UserService(userRepository)
export const userController = new UserController(userService)

// Containers Books
export const bookReposittory = new BookRepository()
export const bookService = new BookService(bookReposittory)
export const bookController = new BookControler(bookService)

// Containers Authors
export const authorRepository = new AuthorRepository()
export const authorService = new AuthorService(authorRepository)
export const authorController = new AuthorController(authorService)

