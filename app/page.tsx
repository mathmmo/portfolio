import Hero from "@/components/Hero";
import { main } from "framer-motion/client";


export default function Home() {
  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-full">
    <main className="bg-black-100">
      <div className="w-full h-full">
        {/* <Hero /> */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-gray-300 w-full">
          <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
          <p className="text-lg">
            This portfolio is a <span className="font-semibold text-blue-500">work in progress</span>. Stay tuned!
          </p>
          <small className="text-gray-500">By: Matheus Oliveira</small>
        </div>
      </div>
    </main>
  );
}