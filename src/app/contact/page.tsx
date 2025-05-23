import { Button } from "@/components/ui/button";
import { FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative isolate backdrop:blur-3xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <title>title</title>
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-burgundy to-gold opacity-20"
                />
              </div>
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-foreground">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <FaBuilding
                    aria-hidden="true"
                    className="h-7 w-6 text-accent"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <FaPhone aria-hidden="true" className="h-7 w-6 text-accent" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaEnvelope
                    aria-hidden="true"
                    className="h-7 w-6 text-accent"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-white"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button variant="default" className="cursor-pointer">
                Send message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
