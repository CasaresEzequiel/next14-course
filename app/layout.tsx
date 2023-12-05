import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AAUD Dashboard',
    default: 'AAUD Dashboard',
  },
  description: 'Another Awesome & Useless Dashboard, built with App Router.',
  metadataBase: new URL('https://ecasares.com.ar/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
