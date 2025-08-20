import { truncateWords } from "@/lib/utils";
import type { Listing } from "@/types/listing";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <motion.div
      className="relative lg:col-span-2"
      initial={{ scale: 1, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* background layer */}
      <div className="absolute inset-px rounded-lg bg-card" />
      {/* card content */}
      <div className="relative flex flex-col overflow-hidden rounded-lg">
        {/* 16:10 aspect-ratio wrapper */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={listing.media[0].url}
            alt={listing.title}
            width={400}
            height={250} // 16∶10 aspect ratio
            quality={75}
            className="object-cover"
          />
        </div>

        {/* body */}
        <div className="p-4 space-y-2">
          <h3 className="text-sm font-semibold [color:var(--primary)]">
            {listing.address}
          </h3>
          <Link href={`/buy${listing.address}`} className="text-lg font-medium tracking-tight [color:var(--foreground)] hover:underline">
            {listing.title}
          </Link>
          <p className="text-sm [color:var(--muted-foreground)]">
            {truncateWords(listing.description, 10)}
          </p>
        </div>
      </div>

      {/* ring/shadow outline */}
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 [--tw-ring-color:var(--ring)]" />
    </motion.div>
  );
};

export default ListingCard;