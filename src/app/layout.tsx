import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
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
  title: "Sayan Mondal | ECE Student & Developer",
  description: "Personal portfolio of Sayan Mondal - 4th year B.Tech (ECE) student at Dr. B. C. Roy Engineering College, Durgapur. Frontend developer, Python enthusiast, and IoT/ML developer.",
  keywords: ["web developer", "frontend", "portfolio", "Python", "Java", "IoT", "Machine Learning", "ESP32", "Next.js"],
  authors: [{ name: "Sayan Mondal" }],
  creator: "Sayan Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.sayan.qzz.io",
    title: "Sayan Mondal | ECE Student & Developer",
    description: "Personal portfolio of Sayan Mondal - Frontend developer, Python enthusiast, and IoT/ML developer.",
    siteName: "Sayan Mondal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Mondal | ECE Student & Developer",
    description: "Personal portfolio of Sayan Mondal - Frontend developer, Python enthusiast, and IoT/ML developer.",
    creator: "@sayanwebdev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
