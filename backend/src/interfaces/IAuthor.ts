import { Author } from "@prisma/client"

export interface IAuthor {
  id: number,
  name: string,
}

export interface ICreateAuthor {
  name: string,
}

export interface IUpdateAuthor {
  name?: string,
}

export interface IAuthorsRepository {
  find: () => Promise<Author[]>
  findById: (id: number) => Promise<Author | null>
  create: (attributes: ICreateAuthor) => Promise<Author>
  updateById: (id: number, attributes: Partial<ICreateAuthor>) => Promise<Author | null>
  deleteById: (id: number) => Promise<Author | null>
  findByName: (name: string) => Promise<Author | null>
}
