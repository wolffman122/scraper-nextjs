import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { scraperSchedule } from './lib/scheuler';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  scraperSchedule();
  
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
