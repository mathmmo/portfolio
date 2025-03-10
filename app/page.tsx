import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { ThemeProvider } from "./provider";


export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav 
            navItems={navItems}
          />
          
          <Hero />
          <Grid />
          <Experience />
          <RecentProjects />
          <Approach />
        </div>
      </main>
    </ThemeProvider>
  );
}