import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppDev",
  description: "Your one stio inline solurtion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      <h1> demo page</h1>
      </body>
    </html>
  );
}
