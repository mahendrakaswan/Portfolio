import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahendra Kaswan | Solving one problem at a time',
  description: 'Personal space of Mahendra Kaswan (Mahi). Manufacturing, business intelligence, sports, books, and everything in between.',
  openGraph: {
    title: 'Mahendra Kaswan | Solving one problem at a time',
    description: 'Personal space of Mahendra Kaswan (Mahi). Manufacturing, business intelligence, sports, books, and everything in between.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
