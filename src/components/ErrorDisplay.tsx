import Link from "next/link";
import { Button } from "./ui/button";

interface ErrorDisplayProps {
	title: string;
	message: string;
}

const ErrorDisplay = ({ title, message }: ErrorDisplayProps) => {
	return (
		<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-gold">404</p>
				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
					{title}
				</h1>
				<p className="mt-6 text-lg font-medium text-pretty text-primary sm:text-xl/8">
					{message}
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Button variant="default">
						<Link href="/">Go back home</Link>
					</Button>
				</div>
			</div>
		</main>
	);
};

export default ErrorDisplay;
