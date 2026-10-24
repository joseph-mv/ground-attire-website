import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { getHomeContent } from "@/lib/home";

export function Hero() {
  const { images } = getHomeContent().hero;

  return (
    <section aria-label="Studio film" className="relative -top-18">
      <HeroSlideshow images={images} />
    </section>
  );
}
