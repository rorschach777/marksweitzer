import type { Metadata } from "next";
import { MsContextProvider } from './context/ms-context';
import LoadingContent from './components/LoadingContent';
// import localFont from "next/font/local";
import SmoothScrolling from './components/SmoothScrolling';
import './main.css'

import Provider from './Provider';
import SearchParams from "./components/SearchParams";
import { cookies } from "next/headers";




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

interface ICookie  {
  name: string, 
  value: string
}

const getCookieData = async () => {
  const cookieStore = await cookies();
  const jobTitle : ICookie | undefined = cookieStore.get('jobTitle');
  if(jobTitle !== undefined){
    return jobTitle.value
  } else {
    return "";
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jobTitle  = await getCookieData();
  // const jobIsValid = validJob(jobTitle);
  return (
    <>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ewr3rhx.css" />
      </head>
      <body>
      <MsContextProvider>

      <SearchParams cookieJobTitle={jobTitle}/>
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
