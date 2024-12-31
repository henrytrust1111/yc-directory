import type { Metadata } from "next";
import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";



export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}