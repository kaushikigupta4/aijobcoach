"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (!imageElement) return;
      imageElement.style.transform =
        scrollPosition > 100 ? "scale(1.02)" : "scale(1)";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center pt-32 md:pt-40 pb-10 bg-gray-50 overflow-hidden">
      {/* Text Section */}
      <div className="text-center px-4 space-y-6 max-w-4xl">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-purple-500 to-pink-400 bg-clip-text text-transparent leading-tight">
          Your AI Career Coach for
          <br />
          Professional Success
        </h1>

        <p className="mx-auto max-w-2xl text-gray-600 md:text-xl">
          Advance your career with personalized guidance, interview prep, and
          AI-powered tools for resume builder and cover letter.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-[rgb(202,148,225)] hover:bg-[rgb(185,130,220)] text-white transition-all"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-[rgb(202,148,225)] text-[rgb(202,148,225)] hover:bg-[rgb(202,148,225)] hover:text-white transition-all bg-white"
            >
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 w-[85%] flex justify-center">
        <div
          ref={imageRef}
          className="transition-transform duration-500 ease-out"
        >
          <Image
            src="/heroimage.jpg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-xl shadow-xl border border-gray-200 mx-auto max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
