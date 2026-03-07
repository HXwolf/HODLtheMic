
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Orbitron } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HODL the Mic - Hip Hop for Web3 and Blockchain Understanding",
  description: "Where HIPHOP Meets BLOCKCHAIN Revolution",
  icons: {
    icon: "https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png",
    shortcut: "https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png",
    apple: "https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
