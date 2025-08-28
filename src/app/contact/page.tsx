import { Button } from "@/components/ui/button";
import { Pattern } from "@/components/Pattern";
import { FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactUsForm = () => {
	return (
		<form
			action="#"
			method="POST"
			className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
		>
			<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label
							htmlFor="first-name"
							className="block text-sm/6 font-semibold text-white"
						>
							First name
						</label>
						<div className="mt-2.5">
							<input
								id="first-name"
								name="first-name"
								type="text"
								autoComplete="given-name"
								className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last-name"
							className="block text-sm/6 font-semibold text-white"
						>
							Last name
						</label>
						<div className="mt-2.5">
							<input
								id="last-name"
								name="last-name"
								type="text"
								autoComplete="family-name"
								className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm/6 font-semibold text-white"
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="phone-number"
							className="block text-sm/6 font-semibold text-white"
						>
							Phone number
						</label>
						<div className="mt-2.5">
							<input
								id="phone-number"
								name="phone-number"
								type="tel"
								autoComplete="tel"
								className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm/6 font-semibold text-white"
						>
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								id="message"
								name="message"
								rows={4}
								className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-white/10 placeholder:text-gray-500 focus:-outline-offset-2"
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className="mt-8 flex justify-end">
					<Button variant="default" className="cursor-pointer">
						Send message
					</Button>
				</div>
			</div>
		</form>
	);
};

const Contact = () => {
	return (
		<div className="relative isolate backdrop:blur-3xl">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
							{/*Background decoration pattern*/}
							<Pattern />
						</div>
						<h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
							Get in touch
						</h2>
						<p className="mt-6 text-lg/8 text-foreground">
							Proin volutpat consequat porttitor cras nullam gravida at. Orci
							molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
							Arcu sed malesuada et magna.
						</p>
						<dl className="mt-10 space-y-4 text-base/7 text-foreground">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Address</span>
									<FaBuilding
										aria-hidden="true"
										className="h-7 w-6 text-accent"
									/>
								</dt>
								<dd>
									545 Mavis Island
									<br />
									Chicago, IL 99191
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Telephone</span>
									<FaPhone aria-hidden="true" className="h-7 w-6 text-accent" />
								</dt>
								<dd>
									<a href="tel:+1 (555) 234-5678" className="hover:text-white">
										+1 (555) 234-5678
									</a>
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<FaEnvelope
										aria-hidden="true"
										className="h-7 w-6 text-accent"
									/>
								</dt>
								<dd>
									<a
										href="mailto:hello@example.com"
										className="hover:text-white"
									>
										hello@example.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				{/*  Form */}
				<ContactUsForm />
			</div>
		</div>
	);
};

export default Contact;
