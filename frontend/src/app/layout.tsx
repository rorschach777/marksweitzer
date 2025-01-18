import type { Metadata } from "next";
import { MsContextProvider } from './context/ms-context';
import LoadingContent from './components/LoadingContent';
// import localFont from "next/font/local";
import SmoothScrolling from './components/SmoothScrolling';
import './main.css'

import Provider from './Provider';
import CookieReader from "./components/CookieReader";
import { Suspense } from "react";




// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const jobIsValid = validJob(jobTitle);
  return (
    <>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ewr3rhx.css" />
      </head>
      <body>
      <MsContextProvider>
      <Suspense fallback={<div></div>}>
        <CookieReader />
      </Suspense>

        <div className="root-container ms-home">
            <Provider>
              <SmoothScrolling>
              <LoadingContent>
              {children}
              </LoadingContent>
              </SmoothScrolling>
            </Provider>
        </div>
        </MsContextProvider>

      </body>
    </html>
    </>
  );
}
