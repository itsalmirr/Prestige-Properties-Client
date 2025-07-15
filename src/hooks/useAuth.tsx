
'use client'

import { useState, useEffect } from 'react'
import api from '@/lib/api'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await api.get('/api/auth/status')
        setIsLoggedIn(response.data.isLoggedIn)
      } catch (error) {
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  return { isLoggedIn, isLoading }
}
