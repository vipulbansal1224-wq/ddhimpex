import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DDH Impex | EPC Engineering, Industrial Chemicals & FMCG Exports",
  description: "DDH Impex is a global leader headquartered in Ludhiana, Punjab, specializing in Basic & Detailed EPC Engineering, Turnkey Projects, Mining & Specialty Chemicals, Acrylates, and FMCG Food Exports.",
  keywords: ["DDH Impex", "EPC Engineering", "Industrial Chemicals", "Mining Chemicals", "Acrylate", "FMCG Food Products", "Ludhiana Punjab", "Basmati Rice", "Turnkey Projects"],
  authors: [{ name: "DDH Impex Group" }],
  openGraph: {
    title: "DDH Impex | Global EPC & Commodity Group",
    description: "Fastest growing industrial business group in EPC engineering, specialty chemicals, and food products.",
    url: "https://www.ddhimpex.com",
    siteName: "DDH Impex",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
