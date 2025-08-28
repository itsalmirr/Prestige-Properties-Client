export type Listing = {
	title: string;
	address: string;
	city: string;
	state: string;
	zip_code: string;
	bedroom: number;
	bathroom: number;
	description: string;
	edges: {
		realtor: {
			full_name: string;
			phone: string;
			email: string;
		};
	};
	media: {
		url: string;
	}[];
};
