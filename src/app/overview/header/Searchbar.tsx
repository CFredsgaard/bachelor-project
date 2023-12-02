import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { COLORS } from "../../colors";

const Searchbar = (props: { updateSearchState: (name: string, location: string) => void }) => {
    const [companyName, setCompanyName] = useState<string>("");
    const [companyLocation, setCompanyLocation] = useState<string>("");
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("companyname") || searchParams.get("companylocation")) {
            setCompanyName(searchParams.get("companyname") ?? "");
            setCompanyLocation(searchParams.get("companylocation") ?? "");
        }
    }, []);

    useEffect(() => {
        handleSearch();
    }, [companyName, companyLocation]);

    const handleSearch = () => {
        props.updateSearchState(companyName, companyLocation);
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
                value={companyName} // Set value directly from state
                onChange={(evt) => setCompanyName(evt.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                style={{ borderColor: COLORS.primary }}
            />
            {/* Location Search Bar */}
            <input
                type="text"
                placeholder="Location"
                className="input input-bordered input-md"
                value={companyLocation} // Set value directly from state
                onChange={(evt) => setCompanyLocation(evt.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                style={{ borderColor: COLORS.primary }}
            />
            <button className="btn btn-md" onClick={handleSearch} style={{ background: COLORS.primary, color: COLORS.secondary }}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;
