import CompanyDecorator from "@/src/models/CompanyDecorator";
import React, { useState } from "react";

interface CompanySearchBarProps {
    allCompanies: CompanyDecorator[];
    updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
}

const Searchbar: React.FC<CompanySearchBarProps> = ({ allCompanies, updateCompanies }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [locationTerm, setLocationTerm] = useState<string>("");

    const handleSearch = () => {
        //Retrieve all companies
        const companyList = [...allCompanies];
        console.log(searchTerm);
        //Filter based on search terms
        const filteredData = companyList.filter(
            (item) =>
                item.company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                item.company.location.toLowerCase().includes(locationTerm.toLowerCase())
        );
        //Display companies matching search terms
        updateCompanies(filteredData);
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
                placeholder="Search for a company..."
                className="input input-bordered input-primary input-md"
                onChange={(evt) => setSearchTerm(evt.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key press
            />
            {/* Location Search Bar */}
            <input
                type="text"
                placeholder="Search by location..."
                className="input input-bordered input-primary input-md"
                onChange={(evt) => setLocationTerm(evt.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key press
            />
            <button className="btn btn-outline btn-primary btn-md" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;