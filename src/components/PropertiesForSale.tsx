"use client";
import api from "@/lib/api";
import { useEffect, useState } from "react";
import type { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface PropertiesForSaleProps {
  size: number;
}

const PropertiesForSale: React.FC<PropertiesForSaleProps> = ({ size }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get(`/api/v1/properties/buy?page_size=${size}`);
        setListings(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, [size]);

  return (
    <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {listings.map((listing: Listing) => (
        <li key={listing.title}>
          <ListingCard listing={listing} />
        </li>
      ))}
    </ul>
  );
};

export default PropertiesForSale;
