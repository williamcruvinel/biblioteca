import {z} from "zod"

export const CreateReservationShemas = z.object({
  userId: z.number(),
  returnAt: z.coerce.date(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),
})

export const GetReservationShemas = z.object({
  userId: z.number().optional(),
  reservedAt: z.coerce.date().optional(),
  returnAt: z.coerce.date().optional(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),
})

export const UpdateReservationShemas = z.object({
  userId: z.number().optional(),
  reservedAt: z.date().optional(),
  returnAt: z.coerce.date().optional(),
  status: z.enum(["Active", "Finished", "Overdue"]).optional(),
})
