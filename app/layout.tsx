import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "./(components)/LeftSideBar";
import RightSideBar from "./(components)/RightSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Run Up",
  description: "by James",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" min-h-screen">
          <div className="flex flex-col items-stretch">
            <main className="flex w-full">
              <aside className="bg-green-700 w-64 ">
                {/* Left-side navbar content */}
                <LeftSideBar />
              </aside>
              <div className="flex-1">
                {children} {/* Main content */}
              </div>
              <aside className="bg-gray-400 w-96 ">
                {/* Right-side ads content */}
                <RightSideBar />
              </aside>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
