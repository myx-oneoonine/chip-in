import "./globals.css";
import { classNames } from "@/utils/style";
import type { Metadata } from "next";
// import localFont from "next/font/local";

export const metadata: Metadata = {
  title: 'Equipment Explorer',
  description: 'equipment explorer power by Hashpays.io',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(
        "mx-auto max-w-sm h-screen",
        "px-4 py-6",
        "bg-primary",
      )}>{children}</body>
    </html>
  )
}
