import { User } from "@prisma/client";
import { ICreateUser, IUpdateUser, IUserRepository} from "../interfaces/IUser";
import { prisma } from "../database/prisma-client";

export class UserRepository implements IUserRepository {
  async find(): Promise<User[]> {
    return prisma.user.findMany()
  }

  async findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where:{id},
      include:{
        reservations: {
          select:{
            books:{
              select:{
                title: true,
                reserve:{
                  select:{
                    reservedAt: true,
                    returnAt: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }

  async create(attributes: ICreateUser): Promise<User> {
    return prisma.user.create({data: attributes})
  }

  async updateById(id: number, attributes: Partial<IUpdateUser>): Promise<User | null> {
    return prisma.user.update({
      where: { id },
      data: attributes
    })
  }

  async deleteById(id: number): Promise<User | null> {
    return prisma.user.delete({
      where: { id }
    })
  }
  
  async addReservation(userId: number, reservationId: number): Promise<User> {
    return prisma.user.update({
      where: { id: reservationId },
      data: {
        reservations: {connect: {id: userId}}
      }
    })
  }

  async removeReservation(userId: number, reservationId: number): Promise<User> {
    return prisma.user.update({
      where: { id: reservationId },
      data: {
        reservations: {disconnect: {id: userId}}
      }
    })
  }
}