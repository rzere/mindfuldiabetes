import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Chat from "@/components/home/chat";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Mindful Diabetes AI",
  description:
    "Your mindful diabetes companion.",
  metadataBase: new URL("https://www.mindfuldiabetes.ai"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><script defer src="https://analytics.us.umami.is/script.js" data-website-id="9ce4fb6b-0904-4caa-991b-c2f9f98c170a"></script></head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
          <Chat />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
