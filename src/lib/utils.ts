import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const truncateWords = (text: string, wordLimit: number) => {
	const words = text.split(/\s+/);
	return (
		words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "…" : "")
	);
};
