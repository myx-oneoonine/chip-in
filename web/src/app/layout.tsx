import "./globals.css";
import { classNames } from "@/lib/utils/style";
import type { Metadata } from "next";
// import localFont from "next/font/local";

export const metadata: Metadata = {
  title: 'Chip In: share your trip expenses',
  description: 'let\'s make it easy to share expenses with friends',
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
