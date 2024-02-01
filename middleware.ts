import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(request.url.includes('status=SUCCESS')) return;

    console.log("URLLLLLLLLLLLLL", request.url)
    return NextResponse.redirect(new URL(`${request.url}/?status=SUCCESS`))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/feature/middleware',
}