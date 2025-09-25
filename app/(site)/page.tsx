import { Hero } from "@/features/hero/Hero";
import { Credibility } from "@/features/credibility/Credibility";
import { ServiceBento } from "@/features/services/ServiceBento";
import { Process } from "@/features/process/Process";
import { Outcomes } from "@/features/outcomes/Outcomes";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { CtaPanel } from "@/features/cta/CtaPanel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <ServiceBento />
      <Process />
      <Outcomes />
      <Testimonials />
      <CtaPanel />
    </>
  );
}
