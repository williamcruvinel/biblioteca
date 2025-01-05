import { Handler } from "express";
import { AuthorService } from "../service/AuthorService";
import { CreateAuthorSchemas, UpdateAuthorSchemas } from "../Schema/AuthorSchemas";

export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  index: Handler = async (req, res, next) => {
    try {
      const authors = await this.authorService.getAuthor()
      res.json(authors)
    }
    catch (error) {
      next(error)
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateAuthorSchemas.parse(req.body)
      const newAuthor = await this.authorService.createAuthor(body)
      res.json(newAuthor)
    } catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
    try {
      const author = await this.authorService.getAuthorById(+req.params.id)
      res.json(author)
    } catch (error) {
      next(error)
    }
  }

  update: Handler = async (req, res, next) => {
    try {
      const authorId = +req.params.id
      const body = UpdateAuthorSchemas.parse(req.body)
      const updateAuthor = await this.authorService.updateAuthor(authorId, body)
      res.json(updateAuthor)
    } catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const authorId = +req.params.inde
      const deleteAuthor = await this.authorService.deleteAuthor(authorId)
      res.json({deleteAuthor})
    } catch (error) {
      next(error)
    }
  }
    
}