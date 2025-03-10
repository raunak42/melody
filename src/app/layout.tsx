import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Mybar } from "@/components/Mybar/Mybar";
import { ControlPanel } from "@/components/ControlPanel/ControlPanel";
import { RecoilProvider } from "@/providers/RecoilProvider";

const kanit = Kanit({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Melody",
  icons:["/melody.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <RecoilProvider>
          <Sidebar />
          <Mybar />
          {children}
          <ControlPanel />
        </RecoilProvider>
      </body>
    </html>
  );
}
