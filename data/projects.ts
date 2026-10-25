import type { Project } from "../types/projects";

const projects: Project[] = [
  {
    slug: "house-in-nadakkav",
    title: "House in Nadakkav",
    location: "Kerala",
    description: "A residential project shaped by light and the coastal terrain.",
    category: "residential",
    year: "2026",
    image: {
      src: "/images/projects/hero4.jpeg",
      alt: "House in Nadakkav, residential architecture in Kerala",
    },
    featured: true,
  },
  {
    slug: "cliff-house",
    title: "Cliff House",
    location: "Kerala",
    description: "A home perched on the cliff edge, open to the horizon.",
    category: "residential",
    image: {
      src: "/images/projects/hero1.jpeg",
      alt: "Cliff House, residential project in Kerala",
    },
    featured: true,
  },
  {
    slug: "wayanad-retreat",
    title: "Wayanad Retreat",
    location: "Wayanad",
    description: "A hospitality retreat embedded in the Western Ghats.",
    category: "hospitality",
    image: {
      src: "/images/projects/hero5.jpeg",
      alt: "Wayanad Retreat, hospitality project in Wayanad",
    },
    featured: true,
  },
  {
    slug: "modern-villa",
    title: "Modern Villa",
    location: "Kozhikode",
    description: "A contemporary family home with open living spaces.",
    category: "residential",
    year: "2025",
    image: {
      src: "/images/projects/hero3.jpeg",
      alt: "Modern Villa, residential project in Kozhikode",
    },
    featured: true,
  },
  {
    slug: "city-office",
    title: "City Office",
    location: "Kochi",
    description: "A compact office renovation focused on natural light.",
    category: "residential",
    image: {
      src: "/images/projects/hero2.jpeg",
      alt: "City Office renovation in Kochi",
    },
    featured: false,
  },
];

export default projects;
