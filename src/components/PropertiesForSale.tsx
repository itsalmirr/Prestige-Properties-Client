"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import type { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";
import type { AxiosError } from "axios";

interface PropertiesForSaleProps {
	size: number;
}

const PropertiesForSale: React.FC<PropertiesForSaleProps> = ({ size }) => {
	const [listings, setListings] = useState<Listing[]>([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				setLoading(true);
				setError(false);

				console.log(`Fetching properties with size: ${size}`);
				const res = await api.get(`/api/v1/properties/buy?page_size=${size}`);

				console.log("Properties response:", res.data);

				// Check if response has data using optional chaining
				if (res.data?.data && Array.isArray(res.data.data)) {
					setListings(res.data.data);
				} else {
					console.warn("No properties data found in response");
					setListings([]);
				}
			} catch (err) {
				console.error("Error fetching properties:", err);

				// Type-safe error logging
				const error = err as AxiosError;
				if (error.response) {
					console.error(
						"Response error:",
						error.response.status,
						error.response.data,
					);
				} else if (error.request) {
					console.error("Network error - no response received");
				} else {
					console.error("Request setup error:", error.message);
				}

				setError(true);
				setListings([]);
			} finally {
				setLoading(false);
			}
		};

		fetchProperties();
	}, [size]);

	if (loading) {
		return (
			<div className="mx-auto mt-20 max-w-2xl text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
				<p className="mt-4 text-gray-500">Loading properties...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="mx-auto mt-20 max-w-2xl text-center text-lg text-red-500">
				<p>
					Failed to load properties. Please check if the backend server is
					running.
				</p>
				<p className="text-sm text-gray-500 mt-2">
					Make sure your Go backend is running on http://localhost:8080
				</p>
			</div>
		);
	}

	if (listings.length === 0) {
		return (
			<div className="mx-auto mt-20 max-w-2xl text-center text-lg text-gray-500">
				No listings available yet.
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
