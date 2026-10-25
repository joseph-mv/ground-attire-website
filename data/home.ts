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
  whoWeAre: {
    eyebrow: "04 — Who we are",
    quote:
      "A building should never feel borrowed from somewhere else. Like a good tailor, we begin with the measurements: the slope, the soil, the light, the neighbours. Then we design the attire the ground was waiting for.",
    quoteAttribution: "says Sinan",
    paragraphs: [
     "Ar. Sinan Muhammed founded Ground Attire in 2023, an architecture practice in Kozhikode, Kerala, working across Architecture, Interiors, Landscape, Art and Events. Every site is measured first, then customised, so no two get the same outfit. Some call for restraint, some for drama, some for a quiet alteration of what already stands. We work with like-minded people to create spaces that sit comfortably on the land."],
    signOff: "Attire to the ground.",
    stats: [
      { value: "12", label: "Years" },
      { value: "48", label: "Projects" },
      { value: "6", label: "Awards" },
    ],
    teamLink: { label: "Meet the team →", href: "/studio" },
    image: {
      src: "/images/home/whoweare.jpeg",
      alt: "Ground Attire studio team seated in a garden",
    },
  },
};

export default homeContent;