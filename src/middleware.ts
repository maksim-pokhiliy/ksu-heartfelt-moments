import { NextResponse, type NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";

import { i18nConfig } from "./i18n";

export default async function middleware(request: NextRequest) {
  const i18nResponse = i18nRouter(request, i18nConfig);

  if (i18nResponse) {
    return i18nResponse;
  }

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
