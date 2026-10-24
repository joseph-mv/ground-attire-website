export type TextSegment = {
    text: string;
    emphasis?: boolean;
  };
  
  export type HomeContent = {
    hero: {
      images: {
        src: string;
        alt: string;
      }[];
    };
    intro: {
      eyebrow: string;
      statement: TextSegment[];
      cta: { label: string; href: string };
    };
    idea: {
      label: string;
      heading: [string, string];
      paragraphs: string[];
      image: {
        src: string;
        alt: string;
      };
    };
  };