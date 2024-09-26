import type { Metadata } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Component {...pageProps} />
        </div>
    );
}
