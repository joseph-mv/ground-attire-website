import { Approach } from "@/components/sections/approach";
import { Hero } from "@/components/sections/hero";
import { Idea } from "@/components/sections/idea";
import { Intro } from "@/components/sections/intro";
import { Journal } from "@/components/sections/journal";
import { SelectedWork } from "@/components/sections/selected-work";
import { WhoWeAre } from "@/components/sections/who-we-are";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Idea />
      {/* <Approach /> */}
      <SelectedWork />
      <WhoWeAre />
      {/* <Journal /> */}
    </>
  );
}
