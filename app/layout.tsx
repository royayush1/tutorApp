import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import PageTransition from "@/components/PageTransition";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "TutorJoy",
  description: "A bright, calm, and organized tutor space for kids."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="relative min-h-screen overflow-hidden bg-cloud text-ink">
          <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-sky/25 blur-3xl" />
          <div className="pointer-events-none absolute top-24 right-0 h-72 w-72 rounded-full bg-berry/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
          <div className="relative z-10">
            <SiteHeader />
            <PageTransition>
              <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
                {children}
              </main>
            </PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
