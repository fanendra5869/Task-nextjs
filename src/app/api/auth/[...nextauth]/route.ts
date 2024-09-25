import NextAuth from "next-auth"
import Facebook from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "email",
        },
      },
    })
    // ...add more providers here
  ],
})
export  {authOptions as GET, authOptions as POST}