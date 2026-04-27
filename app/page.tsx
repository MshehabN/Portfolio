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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
      {/* Page-wide grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      />
      {/* Page-wide radial fade mask, matches the Hero's vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
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
