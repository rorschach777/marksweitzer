import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';


const badRequest = (pathname : string) => {
    let output = false;
    if (pathname === "/" || pathname === "") {
        output = true;
    } 
    return output;
}


export function middleware(request: NextRequest) {
  // Log the current request pathname
  console.log("Current path:", request.nextUrl.pathname);
  const isBadRequest = badRequest(request.nextUrl.pathname);

 // return isBadRequest ? NextResponse.next() :  NextResponse.redirect(new URL('/', request.url));
 return NextResponse.next();
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};