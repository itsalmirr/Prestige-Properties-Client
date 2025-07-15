
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import api from '@/lib/api'

export async function POST() {
  const cookie = cookies().get('auth-session')

  if (!cookie) {
    return NextResponse.json({ message: 'Not logged in' }, { status: 401 })
  }

  try {
    await api.post(
      '/api/auth/logout',
      {},
      {
        headers: {
          Cookie: `auth-session=${cookie.value}`,
        },
      },
    )

    cookies().delete('auth-session')

    return NextResponse.json({ message: 'Logged out' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to logout' },
      { status: 500 },
    )
  }
}
