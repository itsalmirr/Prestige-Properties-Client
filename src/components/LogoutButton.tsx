
'use client'

import { useLogout } from '@/hooks/useLogout'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const { logout, isLoading } = useLogout()

  return (
    <Button onClick={logout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Logout'}
    </Button>
  )
}
