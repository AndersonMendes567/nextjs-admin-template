import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname
  const loginURL = new URL('/auth', request.url)

  const isPrivateRoute = !['/auth', '/bg-default-auth.jpg'].includes(pathName)
  const userIsAuthenticated = cookies().has('admin-template-auth')

  if(isPrivateRoute && !userIsAuthenticated) {
    return NextResponse.redirect(loginURL)
  }
  NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}