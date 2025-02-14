import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "learn quest platform",
  description: "A kiboko dao platform for e-learning based on web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
