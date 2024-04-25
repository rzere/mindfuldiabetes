import Card from "@/components/home/card";
import { Github } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home(){
    return(
      <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://mindfuldiabetes.org"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Mindful Diabetes Inc.
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Meet JEIR: Type 3 Diabetes AI Assistant
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Navigate your health with JEIR 🥕
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full px-5 py-2 text-sm text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            href="https://mindfuldiabetes.org/diabetes-artificial-intelligence-jeir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Quickstart Guide</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/rzere/mindfuldiabetes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">View on</span> GitHub{" "}
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Join the" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </>
    );
  }
  
  const features = [
    {
      title: "Visit mindfuldiabetes.org",
      description:
        "Mindful Diabetes Inc is Dedicated to Finding a Cure for Type III Diabetes.",
      demo: (
        <div className="flex items-center justify-center space-x-20">
          <a href="https://mindfuldiabetes.org/">
          <Image alt="mindfuldiabetes.org" src="/org.png" width={200}/>
          </a>
        </div>
      ),
    },
    {
      title: "Join the Camino!",
      description:
        "Follow us @jointhecamino on Instagram!",
      demo: (
        <div className="flex items-center justify-center space-x-20">
          <a href="https://www.instagram.com/jointhecamino/">
          <Image alt="Join the camino gif" src="/JOINTHECAMINOGIF-Squared.gif" width={186} height={186} />
          </a>
        </div>
      ),
    },
    {
      title: "Support our GoFundMe",
      description:
        "A March Towards Hope Against Alzheimer's: A 100 km Run",
      demo: (
        <div className="flex items-center justify-center space-x-20">
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://www.gofundme.com/f/join-the-camino-a-100-km-run"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Visit GoFundMe!</p>
          </a>
        </div>
      ),
    },
  ];