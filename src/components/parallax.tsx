"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Parallax = () => {
  return <HeroParallax products={products} />
};

const products = [
  {
    title: "Poacher and Hound",
    thumbnail:
      "/images/poacher.png",
  },
  {
    title: "Deez Nuts",
    thumbnail:
      "/images/nuts.webp",
  },
  {
    title: "Cherries",
    thumbnail:
      "/images/cherries.avif",
  },
  {
    title: "Mushrooms",
    thumbnail:
      "/images/mushrooms.jpg",
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
    title: "Inovation",
    thumbnail:
      "/images/quail.jpg",
  },
  {
    title: "More Sausages",
    thumbnail:
      "/images/more_sausage.jpg",
  },
];

export default Parallax;
