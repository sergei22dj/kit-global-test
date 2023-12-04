import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import { ToastContainerWrapper, Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Kit Global Test",
  description: "by Serhii Shtil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainerWrapper />
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
