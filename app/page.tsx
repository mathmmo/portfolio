import Hero from "@/components/Hero";
// import { main } from "framer-motion/client";


export default function Home() {
  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-full">
    <main className="bg-black-100">
      <div className="w-full h-full">
        <Hero />
      </div>
    </main>
  );
}