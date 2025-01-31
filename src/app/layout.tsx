import type { Metadata } from "next";
import { Providers } from "./components/providers";

import "./globals.css";
import "@coinbase/onchainkit/styles.css";

export const metadata: Metadata = {
  title: "Fleek-Base template",
  description: "A simple Next.js template with Fleek and OnchainKit using the Base Pixel template",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
