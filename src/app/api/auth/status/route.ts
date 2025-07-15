
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import api from '@/lib/api'

export async function GET() {
  const cookie = cookies().get('auth-session')

  if (!cookie) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 })
  }

  try {
    const response = await api.get('/api/auth/status', {
      headers: {
        Cookie: `auth-session=${cookie.value}`,
      },
    })

    return NextResponse.json({ isLoggedIn: response.data.isLoggedIn }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 })
  }
}
