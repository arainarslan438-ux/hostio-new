import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostio",
  description: "Free web hosting by Hostio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
