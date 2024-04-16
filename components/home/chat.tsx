import Chatbot from "./Chatbot";
import { getServerSession } from "next-auth/next";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Chat() {
  //const session = await getServerSession(authOptions);
  const session = await getServerSession(handleAuth);
  return <Chatbot session={session} />;
}
