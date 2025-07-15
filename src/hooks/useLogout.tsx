'use client'

import {useState} from 'react'
import api from '@/lib/api'

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false)

  const logout = async () => {
    setIsLoading(true)
    try {
      await api.get('/auth/signout')
      window.location.href = '/'
    } catch (error) {
      console.error('Failed to logout', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {logout, isLoading}
}
