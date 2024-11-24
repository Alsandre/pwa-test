import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import ServiceWorkerRegister from "./components/ServiceworkerRegistrer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const viewport: Viewport = {
    themeColor: "#000000",
};
export const metadata: Metadata = {
    title: "Team 2",
    description: "Team 2 x Doer collab",
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Parkme" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className={`${geistSans.variable} antialiased scroll-hidden`}>
                {/* <ServiceWorkerRegister /> */}
                {children}
            </body>
        </html>
    );
}
