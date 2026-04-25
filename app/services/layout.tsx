import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lewis Scrimgeour",
  description:
    "Web design and development services by Lewis Scrimgeour — front-end development, e-commerce, SEO optimisation, CMS integration, and more.",
  openGraph: {
    title: "Services | Lewis Scrimgeour",
    description:
      "Web design and development services — front-end development, e-commerce, SEO optimisation, CMS integration, and more.",
    url: "https://lpscrim.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
