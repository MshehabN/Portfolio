"use client";

import { FaLocationArrow } from "react-icons/fa6";

const MeetUpSpotlight = () => {
  return (
    <section className="w-full py-12">
      <div
        className="relative w-full overflow-hidden rounded-3xl border border-white/[0.1] shadow-input
                   px-6 md:px-10 py-8 md:py-10
                   flex flex-col sm:flex-row items-center gap-8 sm:gap-10 lg:gap-12"
        style={{ background: "rgb(4,7,29)" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full opacity-30 blur-3xl
                     bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full opacity-20 blur-3xl
                     bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />

        <div className="relative shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 -rotate-6 drop-shadow-2xl">
          <img
            src="/meetup-login.png"
            alt="MeetUp app login screen"
            className="w-full h-auto rounded-[2rem] border border-white/10"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-3 sm:max-w-xl text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-purple">
            Featured build
          </span>
          <h2 className="font-bold text-2xl md:text-3xl">
            MeetUp{" "}
            <span className="text-purple">— Android Meetup Manager</span>
          </h2>
          <p className="text-sm md:text-base text-[#BEC1DD] leading-relaxed">
            Java Android app for discovering and managing local meetups, with
            Firebase Authentication for secure sign-in and Room Database for
            offline-first event storage. Built against Android API 36 with a
            Material-themed UI.
          </p>
          <a
            href="https://github.com/CodyEdition/MeetUp"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center sm:self-start mt-2 inline-flex items-center gap-2 text-purple hover:opacity-80 transition"
          >
            View on GitHub <FaLocationArrow />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetUpSpotlight;
