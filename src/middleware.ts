import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const session = req.cookies.get('auth-session')
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/auth/signin')
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*'],
}
