import { Book } from "@prisma/client";

export type BookStatus = "Available" | "Reserved"

export interface IBook {
  id: number,
  title: string,
  category: string,
  launch: Date,
  amount: number,
  authorId: number,
  reserveId?: number | null,
  status?: BookStatus,
}

export interface ICreateBook {
  title: string,
  category: string,
  launch: Date,
  amount: number,
  authorId: number,
  status?: BookStatus,
  reserveId?: number | null,
}

export interface IUpadateBook {
  title?: string,
  category?: string,
  launch?: Date,
  amount?: number,
  authorId?: number,
  status?: BookStatus,
  reserveId?: number | null,
}

export interface IBookRepository {
  find: () => Promise<Book[]>
  findById: (id: number) => Promise<Book | null>
  create: (attributes: ICreateBook) => Promise<Book>
  updateById: (id: number, attributes: Partial<ICreateBook>) => Promise<Book | null>
  deleteById: (id: number) => Promise<Book | null>
  findByTitle: (title: string) => Promise<Book | null>
}