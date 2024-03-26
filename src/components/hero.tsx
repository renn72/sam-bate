"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effects";

const Hero = () => {
  return (
    <AuroraBackground className="">
      <div className="overflow-x-hidden flex flex-col w-screen gap-4 items-center justify-center dark:bg-grid-black/[0.05] h-screen">
        <div className="text-3xl md:text-9xl font-bold dark:text-white px-12">
          <TextGenerateEffect words={"Sam Bate"} />
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-normal text-base md:text-xl dark:text-neutral-400 py-4"
        >
          makes some cool shit
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
