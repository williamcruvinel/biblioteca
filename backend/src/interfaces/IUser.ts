import { User } from "@prisma/client"

export type TypeUser = "Administrator" | "Reader"

export interface IUser {
  id: number,
  name: string, 
  email: string,
  password: string, 
  typeUser: TypeUser,  
}

export interface ICreateUser {
  name: string, 
  email: string, 
  password: string, 
  typeUser?: TypeUser,
}

export interface IUpdateUser {
  name?: string, 
  email?: string, 
  password?: string, 
  typeUser?: TypeUser,
}

export interface IUserRepository {
  find: () => Promise<User[]>
  findById: (id: number) => Promise<User | null>
  create: (attributes: ICreateUser) => Promise<User>
  updateById: (id: number, attributes: Partial<IUpdateUser>) => Promise<User | null>
  deleteById: (id: number) => Promise<User | null>
  
  addReservation:(userId: number, reservationId: number) => Promise<User>
  removeReservation:(userId: number, reservationId: number) => Promise<User>
}
