import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Work Life Balance",
    description: "Bachelor Project 2023 Prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html data-theme="corporate" lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
