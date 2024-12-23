import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/top-bar";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer"
import { Providers } from "@/components/providers";
import '@coinbase/onchainkit/styles.css';
import { DonationDialog } from "@/components/donate-modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Islacare",
  description: "Experience a safe space for healing and growth",
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
        <Providers>
          <TopBar />
          <Navigation />
          {children}
          <DonationDialog/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
