
import { Download } from "@/components/sections/Download";

import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";



export default function Home({ searchParams }: { searchParams: { annual: string } }) {
  return (
    <div className="">

      <Hero />
      <Features />
      <Pricing annual={searchParams.annual === "true" || false} />
      <Faq />
      <Testimonials />
      <Download />

    </div>
  );
}
