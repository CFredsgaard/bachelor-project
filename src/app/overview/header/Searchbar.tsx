import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { COLORS } from "../../colors";

const Searchbar = (props: { updateSearchState: (name: string, location: string) => void }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [locationTerm, setLocationTerm] = useState<string>("");
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("searchTerm1") || searchParams.get("searchTerm2")) {
            setSearchTerm(searchParams.get("searchTerm1") ?? "");
            setLocationTerm(searchParams.get("searchTerm2") ?? "");
        }
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchTerm, locationTerm]);

    const handleSearch = () => {
        props.updateSearchState(searchTerm, locationTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            handleSearch();
        }
    };

    return (
        <div className="grid gap-4 grid-flow-col">
            {/* company Search Bar */}
            <input
                type="text"
                placeholder="Company name"
                className="input input-bordered input-md"
                value={searchTerm} // Set value directly from state
                onChange={(evt) => setSearchTerm(evt.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                style={{ borderColor: COLORS.color2 }}
            />
            {/* Location Search Bar */}
            <input
                type="text"
                placeholder="Location"
                className="input input-bordered input-md"
                value={locationTerm} // Set value directly from state
                onChange={(evt) => setLocationTerm(evt.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                style={{ borderColor: COLORS.color2 }}
            />
            <button className="btn btn-md" onClick={handleSearch} style={{ background: COLORS.color2, color: COLORS.color4 }}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;
