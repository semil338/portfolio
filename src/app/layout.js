import Navbar from "@/components/Navbar";
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

        <main className="relative z-10 flex justify-center items-center flex-col md:px-16 px-6 ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
