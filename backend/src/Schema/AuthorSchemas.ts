import {z} from "zod"

export const getAuthorSchemas = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
})

export const CreateAuthorSchemas = z.object({
  name: z.string()
})

export const UpdateAuthorSchemas = z.object({
  name: z.string().optional()
})