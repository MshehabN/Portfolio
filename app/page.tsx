"use client";

import { navItems } from "@/data";

// Disable static generation for this page
export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
// import Experience from "@/components/Experience"; // Commented out - can be restored later
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Experience /> */} {/* Commented out - can be restored later */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
