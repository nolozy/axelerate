import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AXELERATE",
  description: "Free Agent VALORANT Team Competing in #ChallengersJP",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
