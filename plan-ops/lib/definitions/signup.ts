import { z } from "zod"
import { $ZodIssue } from "zod/v4/core"

export const signupSchema = z.object({
	name: z.string().min(1, { message: "Username is required" }).trim(),
	email: z.string().email({ message: "Invalid email" }).trim(),
	password: z.string().min(8, { message: "Password must be at least 8 characters long" }).trim(),
})

export type FormState = {
	error?:$ZodIssue []
	message?: string
}
