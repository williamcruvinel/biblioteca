import { Reservation } from "@prisma/client";
import { ICreateReservation, IResevationsRepository, IUpdateReservation } from "../interfaces/IReservations";
import { prisma } from "../database/prisma-client";

export class ReservationRepository implements IResevationsRepository {
  async find(): Promise<Reservation[]> {
    return prisma.reservation.findMany({
      include:{
        user:{
          select:{
            name: true,
            email: true
          }
        }
      }
    })
  }

  async findById(id: number): Promise<Reservation | null> {
    return prisma.reservation.findUnique({
      where:{id},
      include:{
        books:{
          select:{
            title: true
          }
        },
        user:{
          select:{
            name: true,
            email: true
          }
        }
      }
    })
  }

  async create(attributes: ICreateReservation): Promise<Reservation> {
    return prisma.reservation.create({
       data: attributes,
    })
  }

  async updateById(id: number, attributes: Partial<IUpdateReservation>): Promise<Reservation | null> {
    return prisma.reservation.update({
      where:{id},
      data: attributes
    })
  }

  async deleteById(id: number): Promise<Reservation | null> {
    return prisma.reservation.delete({
      where:{id}
    })
  }

  async addBook(bookId: number, reservationId: number): Promise<Reservation | null> {
    await prisma.book.update({
      where: {id: bookId},
      data:{
        reserveId: reservationId
      }
    })
    
    return await prisma.reservation.findUnique({
      where:{id: reservationId}, 
      include: {
        books: true
      }
    })
  }

  async removeBook(bookId: number, reservationId: number): Promise<Reservation | null> {
    await prisma.book.update({
      where: {id: bookId},
      data:{
        reserveId: null
      }
    })
    
    return await prisma.reservation.findUnique({
      where:{id: reservationId}, 
      include: {
        books: true
      }
    })
  }
}