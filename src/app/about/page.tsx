import OurTeam from "@/components/OurTeam";
import Image from "next/image";

const stats = [
  { label: "Real estate transactions annually", value: "5 million" }, // Based on projections for 2025[1][6].
  { label: "Median home price in 2025", value: "$410,700" }, // Reflecting the median price increase for 2025[7].
  { label: "Homes actively for sale", value: "24.6% ↑ YoY" }, // Growth in active listings compared to 2024[5].
];

const values = [
  {
    name: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency, ensuring every transaction is built on trust and ethical practices.",
  },
  {
    name: "Client-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We are dedicated to understanding their unique needs and delivering personalized solutions that exceed expectations.",
  },
  {
    name: "Innovation",
    description:
      "We embrace cutting-edge technology and creative strategies to simplify the real estate process and provide a seamless experience for buyers, sellers, and investors.",
  },
  {
    name: "Community Commitment",
    description:
      "We are passionate about giving back to the communities we serve, fostering positive relationships, and contributing to local growth and development.",
  },
  {
    name: "Excellence",
    description:
      "We strive for excellence in every aspect of our business, from market expertise to customer service, ensuring a superior real estate experience for all.",
  },
  {
    name: "Enjoy Your Dream Home",
    description:
      "Relax and unwind in a space that truly feels like yours. Whether it's a cozy living room to gather with loved ones, a serene backyard for quiet evenings, or a modern kitchen to create lasting memories, your home is where life's best moments happen.",
  },
];

const AboutUs = () => {
  return (
    <main className="isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-foreground [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-yellow-100">
            <title>Decorative background pattern</title>
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-accent to-primary opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary sm:text-7xl">
                  Transforming the Way You Find Home
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-foreground sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  At Prestge Realty, we believe that finding a home should be as
                  inspiring as living in one. Our mission is to simplify and
                  elevate the home-buying experience by connecting people with
                  properties that suit their dreams and lifestyles.
                  <br />
                  What started as a vision to make real estate more accessible
                  has grown into a platform where innovation meets trust. We
                  combine cutting-edge technology, expert insights, and
                  personalized service to ensure every step of your journey
                  feels seamless and rewarding.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      width={396}
                      height={528}
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      width={396}
                      height={528}
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      width={396}
                      height={528}
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      width={400}
                      height={528}
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      width={400}
                      height={528}
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-foreground">
                At Prestige Property, our mission is to empower individuals and
                families to find their perfect home with ease and confidence. We
                are dedicated to transforming the real estate experience by
                combining innovative technology, expert guidance, and a deep
                understanding of local markets.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-foreground">
                Whether you&apos;re searching for a cozy starter home, a
                luxurious dream property, or an investment opportunity, we
                strive to make every step of the journey seamless and
                stress-free. Our platform is designed to connect buyers and
                sellers in meaningful ways, ensuring that every transaction is
                built on trust, transparency, and value.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-foreground">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-accent bg-clip-text bg-gradient-to-l from-gold to-burgundy">
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
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          width={1416}
          height={2832}
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Our values
          </h2>
          <p className="mt-6 text-lg/8 text-foreground">
            We are committed to fostering trust, delivering excellence, and
            creating meaningful connections. Our values drive everything we do,
            ensuring a positive and impactful experience for everyone we serve.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-accent">{value.name}</dt>
              <dd className="mt-1 text-foreground">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      {/* Our Team */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-foreground">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <OurTeam />
      </div>
    </main>
  );
};

export default AboutUs;
