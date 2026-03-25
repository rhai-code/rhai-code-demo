import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Demos | Red Hat AI",
  description: "Interactive AI demos powered by Red Hat OpenShift AI.",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
