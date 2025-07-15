import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export  const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "email",
			credentials: {
				username: { label: "email", type: "text", placeholder: "smith@gmail.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const username = credentials?.username
				const password = credentials?.password

				// fetch user from database
				// for now place holder
				if (!username || !password) {
					return null
				}

				// user is to be fetched from data base
				const user = await prisma.user.findUnique({
					where: {
						email: username,
					},
					select: {
						id: true,
						name: true,
						email: true,
						password: true,
					},
				})
				if (!user) {
					return null
				}
				const isPasswordCorrect = await bcrypt.compare(password, user.password)
				if (!isPasswordCorrect) {
					return null
				}
				return user
			},
		}),
	],
})

export { handler as GET, handler as POST }
