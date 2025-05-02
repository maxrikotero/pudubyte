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
  title: "puduByte | Premium Web & Mobile Development Solutions",
  description: "US-focused outsourcing partner delivering high-quality web and mobile development services with dedicated offshore teams.",
  keywords: [
    "web development",
    "mobile app development",
    "outsourcing",
    "offshore development",
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    "US tech partners",
    "software outsourcing",
    "puduByte"
  ].join(', '),
  openGraph: {
    title: "puduByte | Premium Web & Mobile Development Solutions",
    description: "US-focused outsourcing partner delivering high-quality web and mobile development services with dedicated offshore teams.",
    url: "https://www.pudubyte.com",
    siteName: "puduByte",
    images: [
      {
        url: "/images/pududashboard.png",
        width: 1200,
        height: 630,
        alt: "puduByte - Web & Mobile Development Solutions",
      },
      {
        url: "/images/pududateam-team-collaboration.png",
        width: 1200,
        height: 630,
        alt: "puduByte Dashboard - Custom web and mobile development solutions",
        type: "image/webp",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "puduByte | Premium Web & Mobile Development Solutions",
    description: "US-focused outsourcing partner delivering high-quality web and mobile development services with dedicated offshore teams.",
    images: ["https://www.pudubyte.com/images/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://www.pudubyte.com",
  },
  metadataBase: new URL("https://www.pudubyte.com"),
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
