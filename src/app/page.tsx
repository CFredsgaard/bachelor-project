"use client";

import Link from "next/link";
import { useState } from "react";
import { COLORS } from "./colors";

export default function Home() {
    const [searchTerm1, setSearchTerm1] = useState<string>("");
    const [searchTerm2, setSearchTerm2] = useState<string>("");

    return (
        <main className="flex min-h-screen flex-col items-center p-76">
            {/* Background image */}
            <div className="bg-searchpage bg-no-repeat bg-cover w-screen h-screen -z-0 relative">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            {/* Centered Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                {/* Logo */}
                <div className="mb-8">
                    <img src="/icons/logo.svg" alt="Logo" className="mx-auto" />
                    <img src="/icons/name_white.svg" alt="name" />
                </div>
                <div className="grid gap-4 grid-flow-col">
                    {/* Search Bar 1 */}
                    <input
                        type="text"
                        placeholder="Company name"
                        className="input input-md"
                        onChange={(evt) => setSearchTerm1(evt.target.value)}
                        style={{ borderColor: COLORS.secondary }}
                    />
                    {/* Search Bar 2 */}
                    <input
                        type="text"
                        placeholder="Company location"
                        className="input input-md"
                        onChange={(evt) => setSearchTerm2(evt.target.value)}
                        style={{ borderColor: COLORS.secondary }}
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
                        <button
                            className="btn btn-md"
                            style={{ background: COLORS.primary, color: COLORS.secondary, border: COLORS.primary }}
                        >
                            Search
                        </button>
                    </Link>
                </div>
                <div className="pt-5 text-white">
                    <a href="/overview" className="link">
                        See all companies
                    </a>
                </div>
            </div>
        </main>
    );
}
