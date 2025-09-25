import type { Metadata } from "next";
import { fontVariables } from "@/app/fonts";
import { Header } from "@/components/Header";
import Footer from "@/components/footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Migr - Services comptables pour syndics",
  description: "Expert en migration logicielle, externalisation comptable et accompagnement pour syndics. 10 ans d'expérience, 100% conformité, délai 24h.",
  keywords: "syndic, comptabilité, migration logiciel, externalisation, copropriété, audit, garantie",
  authors: [{ name: "Migr" }],
  openGraph: {
    title: "Migr - Services comptables pour syndics",
    description: "Expert en migration logicielle, externalisation comptable et accompagnement pour syndics.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={fontVariables}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
