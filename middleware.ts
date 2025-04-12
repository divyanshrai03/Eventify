import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const publicRoutes = [
    '/',
    '/events/:id',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ];

  const ignoredRoutes = [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ];

  const pathname = req.nextUrl.pathname;

  // Allow requests to public routes without authentication
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Ignore Clerk, Stripe, and UploadThing webhooks (no auth required)
  if (ignoredRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Ensure authentication for protected routes
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url)); // Redirect to sign-in if not authenticated
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
