import { Reservation } from "@prisma/client"

export type StatusReservations = "Ativo" | "Finalizado" | "Atrasado"

export interface IReservation {
  id: number,
  reservedAt: Date,
  returnAt: Date,
  status: StatusReservations,
  userId: number,
}

export interface ICreateReservation {
  returnAt: Date,
  userId: number,
}

export interface IUpdateReservation {
  returnAt?: Date,
  status?: StatusReservations,
  userId?: number,
}

export interface IReseationsRepository {
  find: () => Promise<Reservation[]>
  findById: (id: number) => Promise<Reservation | null>
  create: (attributes: ICreateReservation) => Promise<Reservation>
  updateById: (id: number, attributes: Partial<ICreateReservation>) => Promise<Reservation | null>
  deleteById: (id: number) => Promise<Reservation | null>
}
