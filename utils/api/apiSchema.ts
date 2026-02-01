import { z } from 'zod'

export const getEmployeesSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
    email: z.string(),
})
