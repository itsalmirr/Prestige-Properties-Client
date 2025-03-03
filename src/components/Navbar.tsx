'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Dialog } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

const navigation = [
  { name: 'Find Your Home', href: '/properties/buy' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment)

  if (pathSegments[0] === 'auth') {
    return null
  }

  return (
    <header className='inset-x-0 top-0 z-50 bg-transparent'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              width={32}
              height={32}
              alt=''
              src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=blue&shade=600'
              className='h-8 w-auto'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <FaBars aria-hidden='true' className='size-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm/6 font-semibold dark:text-gray-200'
            >
              <Button
                variant='link'
                size='default'
                className='cursor-pointer px-0.5'
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link href='/auth/signin'>
            <Button variant='outline' size='lg' className='cursor-pointer'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </Button>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            static
            open={true}
            onClose={setMobileMenuOpen}
            className='lg:hidden'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 bg-black/50'
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
            >
              <div className='flex items-center justify-between'>
                <Link href='/' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  <Image
                    width={32}
                    height={32}
                    alt=''
                    src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                    className='h-8 w-auto'
                  />
                </Link>
                <button
                  type='button'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                >
                  <span className='sr-only'>Close menu</span>
                  <FaXmark aria-hidden='true' className='size-6' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold dark:text-gray-200 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='py-6'>
                    <Link
                      href='/auth/signin'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold dark:text-gray-200 text-gray-900 hover:bg-gray-50'
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
