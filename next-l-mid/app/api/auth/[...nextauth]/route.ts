import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Login with email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Enter your email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
            name : 'Ashyam',
            id : '1',
            username : 'ashyam@2003@gmail.com'
        }
    
      if (user) {
        return user
      } else {
    
        return null
      }
    }
  })
    ]
})

export {handler as GET , handler as POST}