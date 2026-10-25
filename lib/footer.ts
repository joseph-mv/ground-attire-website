import footerContent from "@/data/footer";
import type { FooterContent } from "@/types/footer";

export async function getFooterContent(): Promise<FooterContent> {
  return footerContent;
}
