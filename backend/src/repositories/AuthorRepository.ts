import { Author } from "@prisma/client";
import { IAuthorsRepository, ICreateAuthor, IUpdateAuthor } from "../interfaces/IAuthor";
import { prisma } from "../database/prisma-client";

export class AuthorRepository implements IAuthorsRepository {
  async find(): Promise<Author[]>{
    return prisma.author.findMany()
  }

  async findById(id: number): Promise<Author | null>{
    return prisma.author.findUnique({
      where:{id},
      include:{
        book: {
          select: {
            title: true
          }
        }
      }
    })
  }

  async create(attributes: ICreateAuthor): Promise<Author>{
    return prisma.author.create({data: attributes})
  }

  async updateById(id: number, attributes: Partial<IUpdateAuthor>): Promise<Author | null>{
    return prisma.author.update({
      where:{id},
      data: attributes
    })
  }

  async deleteById(id: number): Promise<Author | null>{
    return prisma.author.delete({
      where:{id}
    })
  }

  async findByName(name: string): Promise<Author | null> {
    return prisma.author.findFirst({
      where: { name },
    });
  }

}