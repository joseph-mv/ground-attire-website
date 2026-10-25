import Image from "next/image";

import { WhoWeAreReveal } from "@/components/sections/who-we-are/who-we-are-reveal";
import { getHomeContent } from "@/lib/home";

export function WhoWeAre() {
  const { whoWeAre } = getHomeContent();

  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="bg-background py-section"
    >
      <div className="mx-auto w-full max-w-[75rem] px-gutter">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,2.75fr)] lg:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={whoWeAre.image.src}
              alt={whoWeAre.image.alt}
              fill
              className="object-cover motion-reduce:scale-100 animate-who-we-are-portrait"
              sizes="(max-width: 64rem) 100vw, 480px"
              priority={false}
            />
          </div>

          <WhoWeAreReveal content={whoWeAre} />
        </div>
      </div>
    </section>
  );
}
