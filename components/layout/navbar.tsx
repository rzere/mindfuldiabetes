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
                 onClick={() => setShowSignInModal(true)}
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
                 className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                 //onClick={() => setShowSignInModal(true)}
                 onClick={() => window.location.href = "https://www.mindfuldiabetes.ai/api/auth/login?"}
               >
                 Log in
               </button>
               </div>
               <div>
               <button
                 className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white"
                 //onClick={() => setShowSignInModal(true)}
                 onClick={() => window.location.href = "https://www.mindfuldiabetes.ai/api/auth/register?"}
               >
                 Create new account
               </button>
          {/* <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink> */}
          </div>
        </div>
      </div>
    </>
  );
}


// export default function NavBar({ session }: { session: Session | null }) {
//   const { SignInModal, setShowSignInModal } = useSignInModal();
//   const scrolled = useScroll(50);

//   return (
//     <>
//       <SignInModal />
//       <div
//         className={`fixed top-0 w-full flex justify-center ${
//           scrolled
//             ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
//             : "bg-white/0"
//         } z-30 transition-all`}
//       >
//         <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
//           <Link href="/" className="flex items-center font-display text-2xl">
//             <Image
//               src="/logo.png"
//               alt="LeadShark logo"
//               width="30"
//               height="30"
//               className="mr-2 rounded-sm"
//             ></Image>
//           </Link>
//           <div>
//             {session ? (
//               <UserDropdown session={session} />
//             ) : (
             
//               <button
//                 className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
//                 onClick={() => setShowSignInModal(true)}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
