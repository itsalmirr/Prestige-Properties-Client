"use client";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const ContactUsForm = () => {
  const inputId = useId();
  const { user } = useAuth();
  console.info(user);

  return (
    <form method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="fullName"
              className="block text-sm/6 font-semibold text-white"
            >
              Full name
            </label>
            <div className="sm:mt-2.5">
              <input
                id={`${inputId}fullName`}
                name="fullName"
                type="text"
                autoComplete="givenName"
                value={user?.full_name || ""}
                readOnly={!!user}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-none placeholder:text-gray-500"
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
                id={`${inputId}email`}
                name="email"
                type="email"
                autoComplete="email"
                value={user?.email || ""}
                readOnly={!!user}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-none placeholder:text-gray-500"
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
                id={`${inputId}phone-number`}
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-none placeholder:text-gray-500"
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
                id={`${inputId}message`}
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  outline-none placeholder:text-gray-500"
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

export default ContactUsForm;
