import type { Metadata } from "next";
import {Geist, Geist_Mono, Noto_Sans_KR} from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
    weight: ['500'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Crux",
  description: "- 모두의 클라이밍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKr.className} antialiased bg-white max-w-[2000px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
