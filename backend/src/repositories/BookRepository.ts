import { Book } from "@prisma/client";
import { IBookRepository, ICreateBook, IUpadateBook } from "../interfaces/IBooks";
import { prisma } from "../database/prisma-client";

export class BookRepository implements IBookRepository {
  async find(): Promise<Book[]> {
    return prisma.book.findMany()
  }

  async findById(id: number): Promise<Book | null>{
    return prisma.book.findUnique({
      where: {id},
      include:{
        author:{
          select:{
            name: true
          }
        },
        reserve: {
          select: {
            user: {
              select:{
                name:true,
                email: true
              }
            }
          }
        }
      }
    })
  }

  async create(attributes: ICreateBook): Promise<Book> {
    return prisma.book.create({
      data: attributes
    })
  }

  async updateById(id: number, attributes: Partial<IUpadateBook>):Promise<Book | null>{
    return prisma.book.update({
      where:{id},
      data:attributes
    })
  }

  async deleteById(id: number): Promise<Book | null>{
    return prisma.book.delete({
      where:{id},
    })
  }

  async findByTitle(title: string): Promise<Book | null> {
      return prisma.book.findFirst({
        where: { title },
      });
    }

  // async addReservation(bookId: number, reserveId: number): Promise<Book>{
  //   return prisma.book.update({
  //     where: { id: reserveId },
  //     data: {
  //       reserve: {connect: {id: bookId}}
  //     }
  //   })
  // }

  // async removeReservation():{

  // }

  // async addAuthor():{

  // }

  // async removeAuthor():{

  // }
}