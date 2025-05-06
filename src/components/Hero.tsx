"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-20 sm:py-32">
        {/* top banner */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            className="
              relative rounded-full px-3 py-1 text-sm/6
              [color:var(--foreground)]
              ring-2 [--tw-ring-color:var(--primary)] ring-opacity-10
              hover:[--tw-ring-color:var(--muted)] hover:ring-opacity-20
            "
          >
            Join our community of homebuyers and sellers.{" "}
            <Link
              href="/auth/signin"
              className="font-semibold [color:var(--primary)]"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Sign up today <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* main content */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight [color:var(--foreground)] sm:text-7xl">
            Discover your dream home with ease.
          </h1>
          <p className="mt-8 text-lg font-medium [color:var(--muted-foreground)] sm:text-xl/8">
            Browse thousands of properties tailored to your needs. From cozy
            apartments to luxurious estates, we make finding your next home
            effortless and enjoyable.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/properties/buy">
              <Button variant="default" size="lg" className="cursor-pointer">
                Get started
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="link" size="lg" className="cursor-pointer">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
