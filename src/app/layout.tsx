import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harryfutcoder.github.io"),
  title: "Dongsheng Hou",
  description:
    "Dongsheng Hou's personal website and research portfolio in reinforcement learning, robot learning, information retrieval, and software engineering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dongsheng Hou",
    description:
      "Research portfolio in reinforcement learning, robot learning, information retrieval, and software engineering.",
    url: "/",
    siteName: "Dongsheng Hou",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
