import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  Services,
  OurServices,
  SystemTypes,
  Systems,
  YearlySavingsOptions,
  Contact,
  Footer,
} from "@/components/site/Sections";

const title = "Aaryon Energy | Rooftop Solar";
const description =
  "Aaryon Energy designs and installs residential, commercial and industrial rooftop solar systems across Tamil Nadu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="home-page min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <OurServices />
        <SystemTypes />
        <Systems />
        <YearlySavingsOptions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
