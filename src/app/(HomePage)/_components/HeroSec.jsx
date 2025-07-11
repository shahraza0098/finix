// src/components/Hero.tsx
"use client";

import { BackgroundBeams } from "@/components/UI/BackgroundBeams";

export default function Hero() {
  return (
    <section className="relative overflow-hidden isolate flex items-center justify-center min-h-screen  text-white">
      {/* Animated Beams Background */}
      <BackgroundBeams className="z-0" />

      {/* Hero Content */}
      <div className="z-10 max-w-3xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Invest in Local <br /> Businesses
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Buy, sell, and track shares in local businesses. Support communities while growing your portfolio.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Get Started
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-indigo-400 flex items-center gap-1">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
