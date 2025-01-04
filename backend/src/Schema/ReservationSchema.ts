import {z} from "zod"

export const CreateReservationShemas = z.object({
  userId: z.number(),
  returnAt: z.date(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),
})

export const GetReservationShemas = z.object({
  userId: z.number().optional(),
  reservedAt: z.date().optional(),
  returnAt: z.date().optional(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),

  // page: z.string().optional(),
  // pageSize: z.string().optional(),
  // sortBy: z.enum(["name", "status", "createdAt"]).optional(), // Ordenar por
  // order: z.enum(["asc", "desc"]).optional()
})

export const UpdateReservationShemas = z.object({
  userId: z.number().optional(),
  reservedAt: z.date().optional(),
  returnAt: z.date().optional(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),
})