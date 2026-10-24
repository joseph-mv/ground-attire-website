import { siteConfig } from "@/config/site";
import { HomeContent } from "@/types/home";

/** A run of text. `emphasis` renders as italic + muted (see the `em` rule in globals.css). */

const homeContent: HomeContent = {
  hero: {
    images: [
      { src: "/images/home/hero1.jpeg", alt: "Hero image 1" },
      { src: "/images/home/hero2.jpeg", alt: "Hero image 2" },
      { src: "/images/home/hero3.jpeg", alt: "Hero image 3" },
      { src: "/images/home/hero4.jpeg", alt: "Hero image 4" },
      { src: "/images/home/hero5.jpeg", alt: "Hero image 5" },
      { src: "/images/home/hero6.png", alt: "Hero image 6" },
    ],
  },
  intro: {
    eyebrow: "An architecture studio",
    statement: [
      { text: "At Ground Attire, we see architecture as " },
      { text: "attire for the ground —", emphasis: true },
      {
        text: " shaped by place, material and light. Every project begins with listening to the site before drawing a single line.",
      },
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  idea: {
    label: "The Idea — Manifesto",
    heading: ["THE GROUND IS", "THE BEGINNING."],
    paragraphs: [
      "Architecture begins with where it stands.",
      "The light, the climate, the terrain, the vegetation, the people and the memory of a place all become part of the design.",
      "At Ground Attire, we see architecture as an attire for the ground — carefully shaped, tailored to its surroundings and designed to reveal what already exists.",
    ],
    image: {
      src: "/images/home/hero6.png",
      alt: "Landscape and terrain at the scale of architecture",
    },
  },
};

export default homeContent;