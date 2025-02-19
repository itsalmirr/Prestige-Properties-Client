import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='bg-transparent relative'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      >
        <div
          style={{
            clipPath:
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-burgundy to-gold opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm/6 text-gray-200 ring-2 ring-gold/10 hover:ring-gray-900/20'>
            Join our community of homebuyers and sellers.{' '}
            <a href='#' className='font-semibold text-primary'>
              <span aria-hidden='true' className='absolute inset-0' />
              Sign up today <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-200 sm:text-7xl'>
            Discover your dream home with ease.
          </h1>
          <p className='mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8'>
            Browse thousands of properties tailored to your needs. From cozy
            apartments to luxurious estates, we make finding your next home
            effortless and enjoyable.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link href='/properties/buy'>
              <Button variant='default' size='lg' className='cursor-pointer'>
                Get started
              </Button>
            </Link>
            <Link href={'/properties/buy'}>
              <Button variant='link' size='lg' className='cursor-pointer'>
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
      >
        <div
          style={{
            clipPath:
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#E43D00] to-[#FFE900] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
        />
      </div>
    </div>
  )
}

export default Header
