
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const   handler= NextAuth({
	providers: [
		CredentialsProvider({
			name:"email",
                        credentials:{
                                username:{ label:"email" , type:"text" , placeholder:"smith@gmail.com"},
                                password:{label:"Password" , type:"password"}
                        },
                        async authorize(credentials , req){
                                const username =  credentials?.username
                                const password =  credentials?.password

                                // fetch user from database
                                // for now place holder


                                // user is to be fetched from data base
                                const user = {
                                        name:'hello',
                                        id:"1",
                                        username:"tester@gmail.com",
                                        password:"1234"
                                }
                                if (username == user.username && password ==user.password){
                                        return user
                                }else {
                                        return null
                                }

                        }
                       

		}),
               

	],
})

export  {  handler as GET  , handler as POST}