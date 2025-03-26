'use client'
import api from '@/lib/api'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

interface Listing {
	title: string
	address: string
	city: string
	state: string
	zip_code: string
	bedroom: number
	bathroom: number
	description: string
	media: {
		url: string
	}[]
}

const FeaturedListings = () => {
	const [listings, setListings] = useState<Listing[]>([])
	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const res = await api.get('/api/v1/properties/buy')
				setListings(res.data.data)
			} catch (err) {
				console.error(err)
			}
		}
		fetchProperties()
	}, [])

	return (
		<div className="mx-10 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">
						Featured Listings
					</h2>
					<p className="mt-6 text-lg/8 text-primary">
						Want to buy a new home? Check out our featured listings below.
					</p>
				</div>
				<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{listings.map((listing: Listing) => (
						<li className="rounded-md" key={listing.address}>
							<Image
								alt=""
								width={3870}
								height={2580}
								src={
									'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								className="aspect-3/2 w-full rounded-2xl object-cover"
							/>
							<h3 className="p-2 mt-6 text-lg/8 font-semibold tracking-tight text-primary">
								{listing.title.substring(0, 27)}
							</h3>
							<p className="p-2 text-base/7 text-primary">{listing.address}</p>
							<ul className="ml-2 mt-6 flex gap-x-6">
								<li>
									<a
										href={listing.city}
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">X</span>
										<MdPhone className="size-5" />
									</a>
								</li>
								<li>
									<a
										href={listing.state}
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">LinkedIn</span>
										<MdEmail className="size-5" />
									</a>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FeaturedListings
