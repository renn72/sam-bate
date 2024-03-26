"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Parallax = () => {
  return <HeroParallax products={products} />
};

const products = [
  {
    title: "Cherries",
    thumbnail:
      "/images/cherries.avif",
  },
  {
    title: "Deez Nuts",
    thumbnail:
      "/images/nuts.webp",
  },
  {
    title: "Poacher and Hound",
    thumbnail:
      "/images/poacher.png",
  },

  {
    title: "Inovation",
    thumbnail:
      "/images/quail.jpg",
  },
  {
    title: "Great Head",
    thumbnail:
      "/images/head.jpg",
  },
  {
    title: "Sausages",
    thumbnail:
      "/images/sausage.jpg",
  },
  {
    title: "Fish",
    thumbnail:
      "/images/fish.jpg",
  },
  {
    title: "Mushrooms",
    thumbnail:
      "/images/mushrooms.jpg",
  },
  {
    title: "More Sausages",
    thumbnail:
      "/images/more_sausage.jpg",
  },
];

export default Parallax;
