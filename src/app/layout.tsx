import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RadialGradientBackground } from "@/components/radial-background";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanh Viet Nguyen",
  description: "Frontend Engineer",
  authors: [
    {
      url: "https://thanhvietnguyen.com",
      name: "Thanh Viet Nguyen",
    },
  ],

  keywords: [
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Web Development",
    "Frontend Development",
    "Frontend",
    "Developer",
    "Engineer",
    "Software Engineer",
    "Software Developer",
    "Thanh Viet Nguyen",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack Development",
    "Full Stack",
    "Full Stack Software Engineer",
    "Full Stack Software Developer",
    "FreeLancer",
    "FreeLance",
    "Senior Frontend Engineer",
    "Senior Frontend Developer",
  ],
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 " +
          inter.className
        }
      >
        <RadialGradientBackground>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
          </div>
        </RadialGradientBackground>
      </body>
    </html>
  );
}
