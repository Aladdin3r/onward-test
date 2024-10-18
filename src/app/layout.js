import { dm_sans } from "./fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Onward",
  description: "Onward is an AI-powered personal interview coach designed to help nurses, particularly those new to the Canadian healthcare system, excel in job interviews.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
