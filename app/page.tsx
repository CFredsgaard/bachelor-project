"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchTerm1, setSearchTerm1] = useState<string>("");
  const [searchTerm2, setSearchTerm2] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center p-76">
      <div className="bg-searchpage bg-no-repeat bg-cover w-screen h-screen -z-0"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="text-sky-400 py-10">Start Page</h1>
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
            placeholder="Search by Location"
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
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}
