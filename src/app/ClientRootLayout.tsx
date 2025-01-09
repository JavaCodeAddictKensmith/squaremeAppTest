// app/ClientRootLayout.tsx (Client Component)
"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import Header from "@/components/Dashboard/Header";

const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    // <html lang="en">
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          totalEarnings={0}
        />
        <div className="flex flex-1">
          <Sidebar open={sidebarOpen} />
          <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
            {children}
          </main>
        </div>
      </div>
      {/* <Toaster /> */}
    </div>
    // </html>
    // <div className={inter.className}>
    //   <div className="min-h-screen bg-gray-50 flex flex-col">
    //     <div className="flex flex-1">
    //       <Sidebar open={sidebarOpen} />
    //       <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
    //         {children}
    //       </main>
    //     </div>
    //   </div>
    // </div>
  );
}
