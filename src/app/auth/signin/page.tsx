import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const SignIn = () => {
	return (
		<div className="relative min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			{/* Logo - Top Left */}
			<div className="absolute top-0 left-0 p-4">
				<Link href="/">
					<Image
						width={32}
						height={32}
						alt="Your Company"
						src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=blue&shade=600"
						className="h-10 w-auto"
					/>
				</Link>
			</div>
			{/* Sign Up Button - Top Right */}
			<div className="absolute top-0 right-0 p-4">
				<Button variant="outline" className="cursor-pointer">
					Sign Up
				</Button>
			</div>
			{/* Centered Sign-In Form */}
			<div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
				<h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-200">
					Sign in to PP Group
				</h2>
				<div className="mt-10 space-y-6">
					<Link
						href="http://localhost:8080/auth/github"
						className="bg-gray-800 flex w-full items-center justify-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-900"
					>
						<FaGithub className="size-5 text-white" />
						<span className="py-1 text-sm/6 text-gray-200 font-semibold">
							GitHub
						</span>
					</Link>
					<Link
						href="http://localhost:8080/auth/google"
						className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
					>
						<FaGoogle className="size-5" />
						<span className="py-1 text-sm/6 font-semibold">Google</span>
					</Link>
				</div>
				<div className="relative mt-10">
					<div className="relative flex justify-center text-sm/6 font-medium">
						<Link
							href="/auth/email"
							className="px-6 text-sky-500 hover:underline"
						>
							Continue with Email <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
