import {z} from "zod"

export const CreateBooksSchemas = z.object({
  title: z.string(),
  category: z.string(),
  launch: z.coerce.date(),
  amount: z.number(),
  authorId: z.number(),
  status: z.enum(["Available", "Reserved"]),
  reserveId: z.number().optional(),
})

export const GetBooksSchemas = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  category: z.string().optional(),
  launch: z.coerce.date().optional(),
  amount: z.number().optional(),
  status: z.enum(["Available", "Reserved"]).optional(),
  authorId: z.number().optional(),
  reserveId: z.number().optional(),

   // page: z.string().optional(),
  // pageSize: z.string().optional(),
  // sortBy: z.enum(["name", "status", "createdAt"]).optional(), // Ordenar por
  // order: z.enum(["asc", "desc"]).optional()
})

export const UpdateBookSchemas = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  launch: z.coerce.date().optional(),
  amount: z.number().optional(),
  status: z.enum(["Available", "Reserved"]).optional(),
  authorId: z.number().optional(),
  reserveId: z.number().optional(),
})