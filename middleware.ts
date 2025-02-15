// import { type NextRequest } from "next/server";
// import { updateSession } from "@/utils/supabase/middleware";

// export async function middleware(request: NextRequest) {
//   // update user's auth session
//   const session = await updateSession(request);
//   return session;
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };


import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Update user's auth session
  const session = await updateSession(request);

  // Handle cases where the session is invalid or missing
  if (!session) {
    const loginUrl = new URL("/login", request.url);
    // loginUrl.searchParams.set("redirect", request.nextUrl.pathname); // Optional: Add redirect back to the original page
    return NextResponse.redirect(loginUrl);
  }

  // If session is valid, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - common image extensions (e.g., svg, png, jpg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
