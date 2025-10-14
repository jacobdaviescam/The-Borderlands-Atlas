import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import MiniMap from "./components/MiniMap";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Borderlands Atlas",
  description: "Mapping the edge of knowledge - a collection of thoughts, explorations, and discoveries from the borderlands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <MiniMap />
        {children}
      </body>
    </html>
  );
}
