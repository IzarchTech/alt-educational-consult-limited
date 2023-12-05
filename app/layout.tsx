import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Alt Educational Consult Limited",
  description:
    "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  icons: [
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/assets/favicon/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/assets/favicon/favicon-32x32.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-192x192.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-512x512.png" },
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "apple-touch-icon", url: "/assets/favicon/apple-touch-icon.png" },
  ],
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Alt Educational Consult Limited",
    description:
      "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  },
  twitter: {
    title: "Alt Educational Consult Limited",
    description:
      "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen w-screen antialiased flex flex-col items-center`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
