
import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Providers from "../providers/wagmi";
import { AuthProvider } from "../contexts/AuthContext";
import { QueryProvider } from "../providers/query";

const tomorrow = Tomorrow({
  weight: ["700"],
  variable: "--font-tomorrow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esperenza - Referral Exchange Platform",
  description: "Find, Share, and Redeem Referral Codes on Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tomorrow.variable} antialiased font-bold`}
        style={{ fontFamily: 'var(--font-tomorrow)' }}>
        <QueryProvider>
          <Providers>
            <AuthProvider>
              {children}
            </AuthProvider>
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
 
