import Hero from "@/components/Hero";
import PropertiesForSale from "@/components/PropertiesForSale";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Featured Listings
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            Want to buy a new home? Check out our featured listings below.
          </p>
          <PropertiesForSale size={3} />
        </div>
      </div>
    </div>
  );
}
