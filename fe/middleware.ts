import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect all routes under /dashboard
  if (pathname.startsWith("/dashboard")) {
    // Check for our auth cookie
    const adminCookie = req.cookies.get("adminUser");
    if (!adminCookie) {
      // Redirect to login if not authenticated
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/admin";
      return NextResponse.redirect(loginUrl);
    }
  }

  // Continue if authenticated or not a dashboard route
  return NextResponse.next();
}

export const config = {
  // Apply middleware to /dashboard and its subpaths
  matcher: ["/dashboard/:path*"],
};
