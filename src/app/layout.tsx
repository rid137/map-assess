import type { Metadata } from "next";
import { Toaster } from "sonner";
import Header from "@/components/shared/header";
import SideNav from "@/components/shared/sidebar/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medical Advanced Platform",
  description: "Chckout our quote response page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Toaster  richColors position="top-center" closeButton toastOptions={{ className: '!flex-start' }} />
        <div className="flex">
          <SideNav />
            <div className="py-5 w-[calc(100vw_-_16.3125rem)] ml-[16.3125rem] bg-[#fff] min-h-[100vh]">
              <Header />
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
