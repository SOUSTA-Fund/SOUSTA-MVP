import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const signer = req.cookies.get('signer')
  const url = req.url

  if (!signer && url.includes('/dashboard')) {
    return NextResponse.redirect('/')
  }
}
