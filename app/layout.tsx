import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { scraperSchedule } from './lib/scheuler';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  scraperSchedule();

  return (
    <html lang="en">
      <Theme>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </Theme>
    </html>
  );
}
