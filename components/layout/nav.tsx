import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Nav() {
  //const session = await getServerSession(authOptions);
  //return <Navbar session={session} />;
  return <Navbar/>;
}
