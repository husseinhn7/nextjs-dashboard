import '@/app/ui/global.css';
import {Cairo , Rubik_Distressed} from 'next/font/google'

const cairo = Rubik_Distressed({subsets : ['latin'] , weight : "400"})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
