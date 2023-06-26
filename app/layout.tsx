import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todo App',
  description: 'Powerd by Rusiru',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* this childern use to where our page is rendered into on the layout itself */}
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  );
}
