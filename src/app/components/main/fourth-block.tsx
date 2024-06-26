"use client";
import Link from "next/link";

export default function FourthBlock() {
  return (
    <div className="relative z-10 bg-rpBlue py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <p className="text-base sm:text-sm md:text-base lg:text-lg">
            Find an Professional Consulting & Business Agency.{" "}
            <a href="tel:604-609-5390" className="underline">
              Call 604-609-5390
            </a>
          </p>
        </div>
        <Link href="/contact">
          <div className="mt-4 md:mt-0 bg-transparent hover:bg-white text-white hover:text-rpBlue py-2 px-6 rounded-md border border-white flex items-center space-x-2 cursor-pointer">
            <span className="text-sm sm:text-base md:text-lg">
              Get Consultations
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
