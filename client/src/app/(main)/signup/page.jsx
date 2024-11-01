import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-end py-4 px-24 sm:px-6 lg:px-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/signup.png')] bg-cover bg-center opacity-80"></div>
      <div className="absolute inset-0 bg-white opacity-30"></div>

      <div className="relative max-w-sm w-full space-y-8 px-10 py-6 rounded-2xl shadow-lg">
        <div>
          <h2 className="mt-3 text-center text-3xl font-serif font-bold text-[#3d405b]">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/Login" className="font-medium text-[#e07a5f] hover:text-[#e07a5f]">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full mb-3 px-3 py-2 bg-transparent shadow-md border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#e07a5f] focus:border-[#e07a5f] focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full mb-3 px-3 py-2 bg-transparent shadow-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#e07a5f] focus:border-[#e07a5f] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full mb-3 px-3 py-2 bg-transparent shadow-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#e07a5f] focus:border-[#e07a5f] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-transparent shadow-md border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#e07a5f] focus:border-[#e07a5f] focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-[#f2cc8f] focus:ring-[#e07a5f] border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#e07a5f] hover:bg-[#3d405b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e07a5f]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
