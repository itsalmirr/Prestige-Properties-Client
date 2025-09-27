"use client";
import Image from "next/image";
import { GoGear, GoSignOut } from "react-icons/go";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const backgroundImage =
	"https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const AccountPage = () => {
	const { user, logout } = useAuth();
	if (!user) return null;

	return (
		<ProtectedRoute>
			<div className="min-h-screen">
				{/* Hero Section */}
				<div
					className="relative h-96 bg-cover bg-center"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
					}}
				>
					<div className="flex items-center justify-center h-full">
						<div className="text-center text-white">
							<div className="mb-4">
								{user.avatar ? (
									<Image
										src={user.avatar}
										alt={user.full_name}
										width={128}
										height={128}
										className="mx-auto rounded-full border-4 border-white shadow-lg"
									/>
								) : (
									<div className="mx-auto w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-4xl font-bold text-gray-600">
										{user.full_name.charAt(0).toUpperCase()}
									</div>
								)}
							</div>
							<h1 className="text-4xl font-bold mb-2">
								Welcome, {user.full_name}
							</h1>
							<p className="text-xl opacity-90">@{user.username}</p>
							<div className="mt-4 flex items-center justify-center space-x-2">
								<span
									className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
										user.is_active
											? "bg-green-100 text-green-800"
											: "bg-red-100 text-red-800"
									}`}
								>
									{user.is_active ? "Active" : "Inactive"}
								</span>
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
									{user.provider}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Page Content Wrapper */}
				<div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
					{/* Account Actions */}
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
							Account Actions
						</h2>
						<div className="space-y-4">
							<Button
								variant="outline"
								size="lg"
								className="w-full justify-start"
								onClick={() => {
									// Consider using useRouter().push('/account/settings') instead of window.location.href
									window.location.href = "/account/settings";
								}}
							>
								<GoGear className="mr-2 h-5 w-5" />
								Account Settings
							</Button>
							<Button
								variant="destructive"
								size="lg"
								className="w-full justify-start"
								onClick={logout}
							>
								<GoSignOut className="mr-2 h-5 w-5" />
								Sign Out
							</Button>
						</div>
					</div>

					{/* Additional Information */}
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
							Account Security
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									Authentication Status
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Your account is secured with {user.provider} authentication.
									Your session is protected with HTTP-only cookies.
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									Account Status
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Your account is currently{" "}
									<span
										className={
											user.is_active ? "text-green-600" : "text-red-600"
										}
									>
										{user.is_active ? "active" : "inactive"}
									</span>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ProtectedRoute>
	);
};

export default AccountPage;
