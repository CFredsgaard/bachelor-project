import CompanyDecorator from "@/src/models/CompanyDecorator";
import React, { useState } from "react";

const Searchbar = (props: { updateSearchState: (name: string, location: string) => void }) => {
    const [nameInput, setNameInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");

    const handleSearch = () => {
        props.updateSearchState(nameInput, locationInput);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="grid gap-4 grid-flow-col">
            {/* company Search Bar */}
            <input
                type="text"
                placeholder="Company name"
                className="input input-bordered input-primary input-md"
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key press
            />
            {/* Location Search Bar */}
            <input
                type="text"
                placeholder="Location"
                className="input input-bordered input-primary input-md"
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key press
            />
            <button className="btn btn-outline btn-primary btn-md" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;
