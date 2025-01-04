import { z } from "zod"

const TypeUser = z.enum(["Administrator", "Reader"])

export const CreateUserShemas = z.object({
  name: z.string(), 
  email: z.string().email({message: 'E-mail inválido'}), 
  password: z.string(), 
  typeUser:  TypeUser.optional(),  
})

export const GetUserShemas = z.object({
  name: z.string().optional(), 
  email: z.string().optional(), 
  password: z.string().optional(), 
  typeUser: TypeUser.optional(),  
  
  // page: z.string().optional(),
  // pageSize: z.string().optional(),
  // sortBy: z.enum(["name", "status", "createdAt"]).optional(), // Ordenar por
  // order: z.enum(["asc", "desc"]).optional()
})

export const UpdateUserShemas = z.object({
  name: z.string().optional(), 
  email: z.string().optional(), 
  password: z.string().optional(), 
  typeUser:  TypeUser.optional(),  
})