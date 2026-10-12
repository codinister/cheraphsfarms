import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const roboto = Montserrat({
  subsets: ['latin'],
  weight: ['400', '900'],
});

export const metadata: Metadata = {
  title: 'Cheraphs Farms',
  description: `Cheraphs Farms is based in Ghana Kumasi and is into general farming
  `,

  metadataBase: new URL('https://cheraphsfarms.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'Cheraphs Farms',
    description: `Cheraphs Farms is based in Ghana Kumasi and is into general farming
    `,
    url: 'https://cheraphsfarms.com',
    siteName: 'Cheraphs Farms',
    images: [
      {
        url: '/logo.jpeg', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'Cheraphs Farms logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cheraphs Farms',
    description: `Cheraphs Farms is based in Ghana Kumasi and is into general farming`,
    images: ['/logo.jpeg'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (

    <html
      lang="en"
      data-qb-installed="true"
      suppressHydrationWarning={true}
      className={roboto.className}
    >
      <body cz-shortcut-listen="true">

{children}</body>
    </html>
  );
}
