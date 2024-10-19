import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import "@phosphor-icons/web/light";
import "@phosphor-icons/web/bold";

export const jakarta = Plus_Jakarta_Sans({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--jakarta',
})
export const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--dm-sans',
}) 

export const metadata = {
  title: "Onward",
  description: "Onward is an AI-powered personal interview coach designed to help nurses, particularly those new to the Canadian healthcare system, excel in job interviews.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body className={`${dm_sans.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
