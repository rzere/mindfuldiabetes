"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
//import { Session } from "next-auth";
//import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const {
    user
} = useKindeBrowserClient();
if (user != null) return (
  <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="MD logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <div>
          <button
                 className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                 onClick={() => window.location.href = "https://www.mindfuldiabetes.ai/api/auth/logout"}
               >
                 Logout
               </button>
          {/* <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink> */}
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="MD logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <div>
               <button
                 //className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white"
                 className="group flex max-w-fit items-center justify-center space-x-2 rounded-full px-5 py-2 text-sm text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                 //onClick={() => setShowSignInModal(true)}
                 onClick={() => window.location.href = "https://www.mindfuldiabetes.ai/api/auth/login?"}
               >
                 Log-in / Register
               </button>
          {/* <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink> */}
          </div>
        </div>
      </div>
    </>
  );
}