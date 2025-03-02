'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import api from '@/lib/api'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GoSignOut, GoGear } from 'react-icons/go'

interface Profile {
  avatar: string
  email: string
  full_name: string
  is_active: boolean
  provider: string
  username: string
}

const backgroundImage =
  'https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Dashboard = () => {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(13)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    setProgress(33)
    const fetchProfile = async () => {
      try {
        const res = await api.get('/api/v1/users/me', {
          signal: controller.signal,
        })
        setProgress(66)
        setProfile(res.data.data)
        setProgress(100)
      } catch (err) {
        if (!controller.signal.aborted) {
          setProgress(66)
          setError('Failed to load profile data')
          console.error('Profile fetch error:', err)
          setProgress(100)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
    return () => controller.abort()
  }, [])

  if (loading || error) {
    return (
      <div className='flex items-center justify-center h-96'>
        <Progress value={progress} className='w-[60%]' />
      </div>
    )
  }
  // if (error) {
  //   return <div className='text-red-500 p-8'>{error}</div>
  // }
  return (
    <div>
      <div>
        <Image
          width={1024}
          height={1024}
          alt=''
          src={backgroundImage}
          className='h-32 w-full object-cover lg:h-48'
        />
      </div>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
          <div className='flex'>
            <Image
              width={1024}
              height={1024}
              alt=''
              src={profile?.avatar || ''}
              className='size-24 rounded-full ring-4 ring-burgundy sm:size-32'
            />
          </div>
          <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
              <h1 className='truncate text-2xl font-bold text-foreground'>
                {profile?.full_name}
              </h1>
            </div>
            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
              <Button variant='outline'>
                <GoGear
                  aria-hidden='true'
                  className='-ml-0.5 mr-1.5 size-5 text-foreground'
                />
                <span>Settings</span>
              </Button>
              <Button variant='outline'>
                <GoSignOut
                  aria-hidden='true'
                  className='-ml-0.5 mr-1.5 size-5 text-foreground'
                />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
          <h1 className='truncate text-2xl font-bold text-gray-900'>
            {profile?.full_name}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
