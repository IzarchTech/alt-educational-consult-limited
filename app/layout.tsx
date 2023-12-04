import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Alt Educational Consult Limited",
  description:
    "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
    { rel: "icon", url: "/favicon/android-chrome-192x192.png" },
    { rel: "icon", url: "/favicon/android-chrome-512x512.png" },
    { rel: "icon", url: "/favicon/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon/apple-touch-icon.png" },
  ],
  manifest: "/favicon/site.webmanifest",
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
        className={`${font.className} h-screen w-screen antialiased flex justify-center items-center`}
      >
        <main className="container px-4">{children}</main>
      </body>
    </html>
  );
}
