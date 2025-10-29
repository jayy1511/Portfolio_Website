import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SiteNavbar from "@/components/site-navbar";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteNavbar />
          <main className="mx-auto w-full max-w-7xl px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
