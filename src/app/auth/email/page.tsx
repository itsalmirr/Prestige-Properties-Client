"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const EmailSignIn = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { login } = useAuth();
	const router = useRouter();
	const emailId = useId();
	const passwordId = useId();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			await login(formData);
			router.push("/account/me");
		} catch (err) {
			const error = err as { response?: { data?: { message?: string } } };
			setError(error.response?.data?.message || "Failed to sign in");
		} finally {
			setIsLoading(false);
		}
	};

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

			{/* Back Button - Top Right */}
			<div className="absolute top-0 right-0 p-4">
				<Link href="/auth/signin">
					<Button variant="outline" className="cursor-pointer">
						← Back
					</Button>
				</Link>
			</div>

			{/* Centered Sign-In Form */}
			<div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
				<h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-200">
					Sign in with Email
				</h2>

				<form className="mt-10 space-y-6" onSubmit={handleSubmit}>
					{error && (
						<div className="rounded-md bg-red-50 p-4">
							<div className="text-sm text-red-700">{error}</div>
						</div>
					)}

					<div>
						<label
							htmlFor={emailId}
							className="block text-sm font-medium text-gray-300"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id={emailId}
								name="email"
								type="email"
								required
								autoComplete="email"
								value={formData.email}
								onChange={handleChange}
								className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor={passwordId}
							className="block text-sm font-medium text-gray-300"
						>
							Password
						</label>
						<div className="mt-2">
							<input
								id={passwordId}
								name="password"
								type="password"
								required
								autoComplete="current-password"
								value={formData.password}
								onChange={handleChange}
								className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<Button
							type="submit"
							disabled={isLoading}
							className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
						>
							{isLoading ? "Signing in..." : "Sign in"}
						</Button>
					</div>
				</form>

				<div className="mt-6 text-center">
					<Link
						href="/auth/forgot-password"
						className="text-sm text-blue-400 hover:text-blue-300"
					>
						Forgot your password?
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmailSignIn;
