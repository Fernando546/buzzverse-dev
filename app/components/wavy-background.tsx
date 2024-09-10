"use client";
import React from "react";
import { WavyBackground } from "../../components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to Buzzverse
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Group of students dedicated to fostering a love for science
        </p>
      </div>
    </WavyBackground>
  );
}
