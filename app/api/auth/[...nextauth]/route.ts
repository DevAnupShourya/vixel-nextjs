import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "./options";

export const handler : NextAuthOptions = NextAuth(authOptions) satisfies NextAuthOptions;

export { handler as GET, handler as POST };