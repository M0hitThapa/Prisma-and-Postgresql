import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "next-auth/providers/github";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()

export const {auth, handlers, signIn, signOut} = NextAuth({
    session: {
        strategy:"jwt",
    },
    providers:[Github],
    adapter:PrismaAdapter(prisma),
    callbacks:{
        async jwt({token, user}) {
            if(user) {
                token.id = user.id

            }
            return token

        },
        async session({session, token}) {
            if(session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
            }
            return session
        } 
            

        
    }
})