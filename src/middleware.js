import { NextResponse } from "next/server";

export function middleware(request) {
  const isLogged = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/dashboard") && !isLogged) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (request.nextUrl.pathname === "/login" && isLogged) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}
