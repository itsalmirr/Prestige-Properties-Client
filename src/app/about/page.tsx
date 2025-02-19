import Image from 'next/image'

const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]

const values = [
  {
    name: 'Be world-class',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Share everything you know',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Always learning',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Be supportive',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Take responsibility',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Enjoy downtime',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

const AboutUs = () => {
  return (
    <main className='isolate'>
      {/* Hero section */}
      <div className='relative isolate -z-10'>
        <svg
          aria-hidden='true'
          className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gold [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
        >
          <defs>
            <pattern
              x='50%'
              y={-1}
              id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
              width={200}
              height={200}
              patternUnits='userSpaceOnUse'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-yellow-100'>
            <path
              d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden='true'
          className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-burgundy to-gold opacity-30'
          />
        </div>
        <div className='overflow-hidden'>
          <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
            <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl'>
                <h1 className='text-pretty text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold to-burgundy sm:text-7xl'>
                  We&apos;re changing the way people connect
                </h1>
                <p className='mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-gray-200 sm:max-w-md sm:text-xl/8 lg:max-w-none'>
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                  Eu voluptate tempor esse minim amet fugiat veniam occaecat
                  aliqua.
                </p>
              </div>
              <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <Image
                      width={396}
                      height={528}
                      alt=''
                      src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <Image
                      width={396}
                      height={528}
                      alt=''
                      src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      width={396}
                      height={528}
                      alt=''
                      src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <Image
                      width={400}
                      height={528}
                      alt=''
                      src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      width={400}
                      height={528}
                      alt=''
                      src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight dark:text-gold text-gray-900 sm:text-5xl'>
            Our mission
          </h2>
          <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
            <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
              <p className='text-xl/8 text-gray-600 dark:text-gray-200'>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className='mt-10 max-w-xl text-base/7 text-gray-700 dark:text-gray-200'>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <div className='lg:flex lg:flex-auto lg:justify-center'>
              <dl className='w-64 space-y-8 xl:w-80'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='flex flex-col-reverse gap-y-4'
                  >
                    <dt className='text-base/7 text-gray-600 dark:text-primary'>
                      {stat.label}
                    </dt>
                    <dd className='text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-gold to-burgundy'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <Image
          width={1416}
          height={2832}
          alt=''
          src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
        />
      </div>

      {/* Values section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight dark:text-gold text-gray-900 sm:text-5xl'>
            Our values
          </h2>
          <p className='mt-6 text-lg/8 text-gray-600 dark:text-gray-200'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {values.map((value) => (
            <div key={value.name}>
              <dt className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold to-burgundy'>
                {value.name}
              </dt>
              <dd className='mt-1 text-gray-600 dark:text-gray-100'>
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight dark:text-gold text-gray-900 sm:text-5xl'>
            Our team
          </h2>
          <p className='mt-6 text-lg/8 text-gray-600 dark:text-primary'>
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image
                width={96}
                height={96}
                alt=''
                src={person.imageUrl}
                className='mx-auto size-24 rounded-full'
              />
              <h3 className='mt-6 text-base/7 font-semibold tracking-tight dark:text-primary text-gray-900'>
                {person.name}
              </h3>
              <p className='text-sm/6 dark:text-primary text-gray-600'>
                {person.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default AboutUs
