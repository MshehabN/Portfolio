"use client";

import { navItems } from "@/data";

// Disable static generation for this page
export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
// import Experience from "@/components/Experience"; // Commented out - can be restored later
import MeetUpSpotlight from "@/components/MeetUpSpotlight";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
      {/* Page-document grid background that scrolls with the page, visible at the top and bottom and fading out through the middle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      >
        {/* Vertical fade overlay: opaque black-100 in the middle, transparent at top and bottom, so the grid shows in/out as you scroll */}
        <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_65%,transparent_100%)]" />
      </div>
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <MeetUpSpotlight />
        <RecentProjects />
        {/* <Experience /> */} {/* Commented out - can be restored later */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
