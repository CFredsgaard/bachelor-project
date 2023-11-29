"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchTerm1, setSearchTerm1] = useState<string>("");
  const [searchTerm2, setSearchTerm2] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center p-76">
      {/* Background image */}
      <div className="bg-searchpage bg-no-repeat bg-cover w-screen h-screen -z-0 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Centered Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/icons/logo.svg"
            alt="Logo"
            className="w-20.5rem h-14rem mx-auto"
          />
        </div>
        <div className="grid gap-4 grid-flow-col">
          {/* Search Bar 1 */}
          <input
            type="text"
            placeholder="Search for companies..."
            className="input input-bordered input-primary input-md"
            onChange={(evt) => setSearchTerm1(evt.target.value)}
          />
          {/* Search Bar 2 */}
          <input
            type="text"
            placeholder="Search by Location..."
            className="input input-bordered input-primary input-md"
            onChange={(evt) => setSearchTerm2(evt.target.value)}
          />
          <Link
            href={{
              pathname: "/overview",
              query: {
                searchTerm1: searchTerm1,
                searchTerm2: searchTerm2,
              },
            }}
            className="bg-[#DCC2B6] hover:bg-[#cfa795] text-neutral-950 py-2 px-4 flex items-center text-center"
          >
            Search
          </Link>
        </div>
        <div className="pt-5 text-white">
          <a href="/overview">Advanced search</a>
        </div>
      </div>
    </main>
  );
}
