import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/page";
import CommonBanner from "@/components/common-banner/page";
import SliderBanner from "@/components/slider-banner/page";

export const metadata: Metadata = {
  title: "My First NextJS APP",
  description: "Create by Bhavy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CommonBanner />
        {children}
      </body>
    </html>
  );
}
