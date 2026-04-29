"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import LanguagesCodeBlock from "./LanguagesCodeBlock";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 2xl:gap-10 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  hasButton,
  buttonText,
  buttonLink,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}) => {
  const leftLists = ["Android Studio", "Linux", "Debian", "ReactJS", "Docker", "Git", "Oracle"];
  const rightLists = ["Firebase", "Flask", "Spring Boot", "scikit-learn", "Pandas", "Matplotlib", "Room"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "moe2004900@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Cascading framework pills: two columns of pills where the right
            column is offset down by half a row pitch, so each right pill
            sits between two left pills (brick / interlock pattern). */}
        {id === 3 && (
          <div className="absolute z-20 top-3 sm:top-4 lg:top-5 xl:top-6 2xl:top-8 right-2 sm:right-3 lg:right-4 xl:right-5 2xl:right-6 flex items-start gap-1 xl:gap-2 2xl:gap-3 w-fit">
            <div className="flex flex-col gap-2 xl:gap-5 2xl:gap-8">
              {leftLists.map((item) => (
                <span
                  key={item}
                  className="py-1 px-2 text-[10px] xl:py-3 xl:px-3 xl:text-sm 2xl:py-4 2xl:px-3 2xl:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap w-20 sm:w-24 xl:w-32 2xl:w-40"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 xl:gap-5 2xl:gap-8 mt-[15px] xl:mt-[32px] 2xl:mt-[44px]">
              {rightLists.map((item) => (
                <span
                  key={item}
                  className="py-1 px-2 text-[10px] xl:py-3 xl:px-3 xl:text-sm 2xl:py-4 2xl:px-3 2xl:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap w-20 sm:w-24 xl:w-32 2xl:w-40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col",
            id === 3
              ? "px-3 py-5 sm:px-4 sm:py-6 lg:px-4 lg:py-8 xl:px-3 xl:py-9 2xl:px-6 2xl:py-10 z-30"
              : "px-5 p-5 lg:p-10"
          )}
        >
          {id !== 3 && (
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
          )}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {/* Tech stack: code block sits in flex flow below the title on the left.
              The staircase pills are positioned absolutely on the card outer below
              (so they hug the top-right edge of the widget, not below the title). */}
          {id === 3 && (
            <div className="z-10 mt-3 sm:mt-4 lg:mt-5 w-fit">
              <LanguagesCodeBlock />
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {copied && (
                  <Lottie
                    animationData={animationData}
                    loop={copied}
                    autoplay={copied}
                    style={{ height: 200, width: 400 }}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                  />
                )}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
          {hasButton && (
            <div className="mt-5 relative">
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title={buttonText || "View Resume"}
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="!bg-[#161A31]"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
