import { useState } from "react";

const Searchbar = (props: { updateSearchState: (name: string, location: string) => void }) => {
    const [nameInput, setNameInput] = useState<string>("");
    const [locationInput, setLocationInput] = useState<string>("");

    const handleSearch = () => {
        props.updateSearchState(nameInput, locationInput);
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
                className="input input-bordered input-primary input-md"
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
            />
            {/* Location Search Bar */}
            <input
                type="text"
                placeholder="Location"
                className="input input-bordered input-primary input-md"
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
            />
            <button className="btn btn-primary btn-md text-white" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;
