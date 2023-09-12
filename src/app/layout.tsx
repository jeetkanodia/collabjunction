import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import ToasterContext from "./context/ToasterContext";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-white" lang="en">
      <body className={inter.className}>
        {" "}
        <Provider>
          <ToasterContext /> {children}
        </Provider>
      </body>
    </html>
  );
}
