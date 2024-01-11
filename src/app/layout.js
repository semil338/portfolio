import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Semil Khedawala",
  description: "Semil Khedawala professional software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {/* <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
