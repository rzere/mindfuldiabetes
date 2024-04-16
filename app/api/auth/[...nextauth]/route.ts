import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();

// import NextAuth, { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/lib/prisma";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//           scope: "openid profile email https://www.googleapis.com/auth/userinfo.profile" // Include the profile image scope
//         }
//       }
//     })
//   ] 
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
