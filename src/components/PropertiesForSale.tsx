"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import type { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface PropertiesForSaleProps {
	size: number;
}

const PropertiesForSale: React.FC<PropertiesForSaleProps> = ({ size }) => {
	const [listings, setListings] = useState<Listing[]>([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const res = await api.get(`/api/v1/properties/buy?page_size=${size}`);
				setListings(res.data.data);
			} catch (err) {
				console.error(err);
				setError(true);
			}
		};
		fetchProperties();
	}, [size]);

	if (error || listings.length === 0) {
		return (
			<div className="mx-auto mt-20 max-w-2xl text-center text-lg text-gray-500">
				No listings yet.
			</div>
		);
	}

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
