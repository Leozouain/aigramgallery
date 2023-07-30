import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };
  return (
    <div
      className="relative isolate bg-[var(--primary-color)] text-[var(--third-color)]"
      style={{ textShadow: "1px 1px 3px #000000" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
            <div
              className="absolute inset-y-0 left-0 -z-10 w-full
             opacity-40 overflow-hidden  ring-1 ring-gray-900/10 lg:w-1/2 opacity-"
              style={{
                backgroundImage:
                  "url(https://cdn.leonardo.ai/users/d926b8cb-c873-42be-8914-9530c5b7ddd4/generations/492ad5c5-3006-4599-a043-96a2c601feb0/DreamShaper_v7_icon_cute_pigeon_face_more_silly_sticker_simp_1.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <h2 className="text-3xl drop-shadow-2xl font-bold tracking-tight text-[var(--third-color)]">
              Get in touch
            </h2>
            <p className="mt-6 font-semibold text-lg leading-8 text-[var(--third-color)]">
              "Got ideas, tips, or new features in mind for our project? We'd
              love to hear from you! Share your thoughts and suggestions with us
              using the form below and let's make this project even better
              together. We value your input and look forward to receiving your
              feedback!" `
            </p>
            <dl className="mt-10 font-semibold space-y-4 text-base leading-7 text-[var(--third-color)]">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  777 Main st
                  <br />
                  Santa Ana, Ca 92000
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="text-[var(--third-color)] hover:text-[var(--third-color)]"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="text-[var(--third-color)] hover:text-[var(--third-color)]"
                    href="mailto:team@aigram.com"
                  >
                    team@aigram.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit}
          //  method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-[var(--third-color)]"
                >
                  First name
                </label>
                <div className="">
                  <input
                    required
                    title="Username must be letters and have 3 characters at least"
                    placeholder="min 3 characters"
                    pattern=".[A-Za-z]{3,}"
                    onChange={handleData}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--third-color)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-[var(--third-color)]"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="optional"
                    onChange={handleData}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--third-color)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-[var(--third-color)]"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    title="Please include a valid e-mail address"
                    onChange={handleData}
                    placeholder="pigeon@aigram.com"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    type="email"
                    name="email"
                    value={formData.email}
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--third-color)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-[var(--third-color)]"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={handleData}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Format: 123-321-7531"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--third-color)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-[var(--third-color)]"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={handleData}
                    name="message"
                    value={formData.message}
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--third-color)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
