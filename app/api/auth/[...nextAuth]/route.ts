import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
export const handler =NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "" },
            password: { label: "Password", type: "password",placeholder:'' }
          },
          async authorize(credentials:any) {
            console.log(credentials);
            return {
              id:"user1",
              name:"test",
              email:"ads"
            }
          }
        })
      ],
      secret:process.env.NEXTAUTH_SECRET
      
})
export { handler as GET, handler as POST };