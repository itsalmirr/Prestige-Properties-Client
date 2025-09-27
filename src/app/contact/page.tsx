import { FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactUsForm from "@/components/ContactUsForm";
import { Pattern } from "@/components/Pattern";

const Contact = () => {
  return (
    <div className="relative isolate backdrop:blur-3xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              {/*Background decoration pattern*/}
              <Pattern />
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
        {/*  Form */}
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Contact;
